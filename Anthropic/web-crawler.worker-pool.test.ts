import { Worker } from 'worker_threads'
import path from 'path'

interface HtmlParser {
  getUrls(url: string): string[]
}

/**
 * Worker pool for concurrent crawling using message passing
 */
class CrawlWorkerPool {
  private worker: Worker
  private messageQueue: Array<{
    url: string
    resolve: (urls: string[]) => void
    reject: (err: Error) => void
  }> = []
  private processing = false

  constructor(urlMap: Record<string, string[]>) {
    this.worker = new Worker(path.join(__dirname, 'worker.ts'), {
      workerData: { urlMap },
      execArgv: ['--loader', 'ts-node/esm'],
    })

    this.worker.on('message', (msg) => {
      if (msg.type === 'done') {
        const job = this.messageQueue.shift()
        if (job) {
          job.resolve(msg.urls)
        }
        this.processQueue()
      }
    })

    this.worker.on('error', (err) => {
      const job = this.messageQueue.shift()
      if (job) {
        job.reject(err)
      }
    })
  }

  getUrls(url: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.messageQueue.push({ url, resolve, reject })
      this.processQueue()
    })
  }

  private processQueue() {
    if (this.messageQueue.length > 0 && !this.processing) {
      this.processing = true
      const job = this.messageQueue[0]
      this.worker.postMessage({ type: 'fetch', url: job.url })

      // Reset processing flag after a short delay to allow response
      setTimeout(() => {
        this.processing = false
      }, 10)
    }
  }

  terminate() {
    return this.worker.terminate()
  }
}

describe('Web Crawler - Worker Pool with Message Passing', () => {
  it('should fetch URLs using worker pool', async () => {
    const urlMap = {
      'http://example.com': ['http://example.com/page1', 'http://example.com/page2'],
      'http://example.com/page1': ['http://example.com/page3'],
      'http://example.com/page2': [],
      'http://example.com/page3': [],
    }

    const pool = new CrawlWorkerPool(urlMap)

    const startTime = performance.now()
    const urls1 = await pool.getUrls('http://example.com')
    const urls2 = await pool.getUrls('http://example.com/page1')
    const endTime = performance.now()

    console.log(`\n🔄 Worker Pool Test`)
    console.log(`   URLs from root: ${urls1.length}`)
    console.log(`   URLs from /page1: ${urls2.length}`)
    console.log(`   Time taken: ${(endTime - startTime).toFixed(2)}ms`)

    expect(urls1).toHaveLength(2)
    expect(urls2).toHaveLength(1)

    await pool.terminate()
  })

  it('should handle sequential requests via worker pool', async () => {
    const urlMap = {
      'http://example.com': ['http://example.com/1'],
      'http://example.com/1': ['http://example.com/2'],
      'http://example.com/2': ['http://example.com/3'],
      'http://example.com/3': [],
    }

    const pool = new CrawlWorkerPool(urlMap)

    console.log(`\n🔄 Sequential Requests via Worker Pool`)

    const startTime = performance.now()

    const urls0 = await pool.getUrls('http://example.com')
    const urls1 = await pool.getUrls('http://example.com/1')
    const urls2 = await pool.getUrls('http://example.com/2')
    const urls3 = await pool.getUrls('http://example.com/3')

    const endTime = performance.now()

    console.log(`   Requests completed: 4`)
    console.log(`   Time taken: ${(endTime - startTime).toFixed(2)}ms`)

    expect(urls0).toHaveLength(1)
    expect(urls1).toHaveLength(1)
    expect(urls2).toHaveLength(1)
    expect(urls3).toHaveLength(0)

    await pool.terminate()
  })

  it('should process multiple URLs from one request', async () => {
    const urlMap = {
      'http://example.com': Array.from({ length: 50 }, (_, i) =>
        `http://example.com/page${i}`
      ),
      ...Object.fromEntries(
        Array.from({ length: 50 }, (_, i) => [
          `http://example.com/page${i}`,
          [],
        ])
      ),
    }

    const pool = new CrawlWorkerPool(urlMap)

    const startTime = performance.now()
    const urls = await pool.getUrls('http://example.com')
    const endTime = performance.now()

    console.log(`\n🔄 Bulk URL Extraction`)
    console.log(`   URLs extracted: ${urls.length}`)
    console.log(`   Time taken: ${(endTime - startTime).toFixed(2)}ms`)

    expect(urls).toHaveLength(50)

    await pool.terminate()
  })
})
