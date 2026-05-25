import { Worker } from "worker_threads"
import { cpus } from "os"
import path from "path"

const NUM_FETCH_WORKERS = 5
const NUM_PARSE_WORKERS = cpus().length
const MAX_URLS = 100

interface FetchWorkerHandle {
  worker: Worker
  busy: boolean
}

interface ParseWorkerHandle {
  worker: Worker
  busy: boolean
  resolve: ((urls: string[]) => void) | null
}

function createParsePool(): ParseWorkerHandle[] {
  return Array.from({ length: NUM_PARSE_WORKERS }, () => {
    const handle: ParseWorkerHandle = {
      worker: new Worker(path.join(__dirname, "parseWorker.ts"), {
        execArgv: ["--loader", "ts-node/esm"],
      }),
      busy: false,
      resolve: null,
    }
    handle.worker.on("message", (urls: string[]) => {
      handle.busy = false
      handle.resolve?.(urls)
      handle.resolve = null
    })
    return handle
  })
}

function parse(
  parsePool: ParseWorkerHandle[],
  html: string,
  baseUrl: string,
): Promise<string[]> {
  return new Promise((resolve) => {
    const tryDispatch = () => {
      const w = parsePool.find((w) => !w.busy)
      if (!w) {
        // no free parse worker yet — retry shortly
        setTimeout(tryDispatch, 5)
        return
      }
      w.busy = true
      w.resolve = resolve
      w.worker.postMessage({ html, baseUrl })
    }
    tryDispatch()
  })
}

export function crawl(startUrl: string, maxUrls: number = MAX_URLS): Promise<string[]> {
  return new Promise((resolve) => {
    const visited = new Set<string>()
    const queue: string[] = [startUrl]
    const hostname = new URL(startUrl).hostname
    const parsePool = createParsePool()
    let urlCount = 0

    const fetchWorkers: FetchWorkerHandle[] = Array.from(
      { length: NUM_FETCH_WORKERS },
      () => {
        const handle: FetchWorkerHandle = {
          worker: new Worker(path.join(__dirname, "fetdhWorker.ts"), {
            workerData: { numParseWorkers: NUM_PARSE_WORKERS },
            execArgv: ["--loader", "ts-node/esm"],
          }),
          busy: false,
        }

        handle.worker.on(
          "message",
          async (msg: {
            type: string
            html?: string
            baseUrl?: string
            urls?: string[]
          }) => {
            if (msg.type === "fetched" && msg.html && msg.baseUrl) {
              // hand off raw HTML to CPU parse pool
              const urls = await parse(parsePool, msg.html, msg.baseUrl)
              const newUrls = urls.filter(
                (url) =>
                  new URL(url).hostname === hostname && !visited.has(url),
              )
              queue.push(...newUrls)
              handle.busy = false
              dispatch()
            } else if (msg.type === "error") {
              handle.busy = false
              dispatch()
            }
          },
        )

        return handle
      },
    )

    function dispatch() {
      for (const w of fetchWorkers) {
        if (w.busy || queue.length === 0 || visited.size >= maxUrls) continue

        const url = queue.shift()!
        if (visited.has(url)) {
          dispatch()
          return
        }

        visited.add(url)
        urlCount++
        w.busy = true
        w.worker.postMessage({ type: "fetch", url })
      }

      // all done when queue empty and no fetch worker is busy
      if ((queue.length === 0 && fetchWorkers.every((w) => !w.busy)) || visited.size >= maxUrls) {
        fetchWorkers.forEach((w) => w.worker.terminate())
        parsePool.forEach((w) => w.worker.terminate())
        resolve([...visited])
      }
    }

    dispatch()
  })
}

// Export for testing
