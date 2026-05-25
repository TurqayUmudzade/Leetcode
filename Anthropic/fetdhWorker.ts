import { parentPort } from "worker_threads"

if (!parentPort) throw new Error("Must be run as a worker")

parentPort.on("message", async (msg: { type: string; url: string }) => {
  if (msg.type !== "fetch") return

  try {
    const response = await (globalThis.fetch as typeof fetch)(msg.url, {
      headers: { "User-Agent": "crawler-bot/1.0" },
      signal: AbortSignal.timeout(10_000), // 10s timeout
    })

    if (!response.ok) {
      parentPort!.postMessage({ type: "error", url: msg.url })
      return
    }

    const contentType = response.headers.get("content-type") ?? ""
    if (!contentType.includes("text/html")) {
      parentPort!.postMessage({ type: "error", url: msg.url })
      return
    }

    const html = await response.text()

    // just return raw HTML — parsing is CPU work, done elsewhere
    parentPort!.postMessage({ type: "fetched", html, baseUrl: msg.url })
  } catch {
    parentPort!.postMessage({ type: "error", url: msg.url })
  }
})

