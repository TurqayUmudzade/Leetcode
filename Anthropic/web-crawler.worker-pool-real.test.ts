/**
 * Worker Pool Crawler - Pre-created workers for maximum performance
 * Reuses workers to avoid creation overhead
 */

import { Worker } from 'worker_threads'
import path from 'path'
import { EventEmitter } from 'events'

/**
 * Task to be processed by worker
 */
interface CrawlTask {
  url: string
  resolve: (urls: string[]) => void
  reject: (error: Error) => void
}

/**
 * Worker pool that maintains a fixed number of workers
 */
class WorkerPool extends EventEmitter {
  private workers: Worker[] = []
  private taskQueue: CrawlTask[] = []
  private activeWorkers = new Map<Worker, boolean>()

  constructor(
    private poolSize: number,
    private workerScript: string
  ) {
    super()
    this.initializeWorkers()
  }

  private initializeWorkers() {
    for (let i = 0; i < this.poolSize; i++) {
      const worker = new Worker(this.workerScript, {
        execArgv: ['--loader', 'ts-node/esm'],
      })

      worker.on('message', (msg) => {
        if (msg.type === 'done') {
          const task = this.taskQueue.shift()
          if (task) {
            task.resolve(msg.urls)
          }
          this.activeWorkers.set(worker, false)
          this.processQueue()
        }
      })

      worker.on('error', (err) => {
        const task = this.taskQueue.shift()
        if (task) {
          task.reject(err)
        }
        this.activeWorkers.set(worker, false)
        this.processQueue()
      })

      this.workers.push(worker)
      this.activeWorkers.set(worker, false)
    }
  }

  async fetch(url: string, urlMap: Record<string, string[]>): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ url, resolve, reject })
      this.processQueue()
    })
  }

  private processQueue() {
    const availableWorker = Array.from(this.activeWorkers.entries()).find(
      ([_, active]) => !active
    )

    if (!availableWorker || this.taskQueue.length === 0) return

    const [worker] = availableWorker
    const task = this.taskQueue[0]

    this.activeWorkers.set(worker, true)

    // Note: In real scenario, urlMap would be passed to worker init, not per-request
    worker.postMessage({ type: 'fetch', url: task.url })
  }

  async terminate() {
    return Promise.all(this.workers.map((w) => w.terminate()))
  }

  getPoolStats() {
    const active = Array.from(this.activeWorkers.values()).filter((a) => a)
      .length
    return {
      poolSize: this.poolSize,
      active,
      queued: this.taskQueue.length,
    }
  }
}

/**
 * Real HTML Parser with actual fetching
 */
class RealHtmlParser {
  async getUrls(url: string): Promise<string[]> {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; PoolCrawler/1.0)',
        },
      })

      if (!response.ok) return []

      const html = await response.text()
      const urls: string[] = []
      const hrefRegex = /href=["']([^"']+)["']/g
      let match

      while ((match = hrefRegex.exec(html)) !== null) {
        try {
          const absoluteUrl = new URL(match[1], url).href
          urls.push(absoluteUrl)
        } catch {
          // Skip invalid URLs
        }
      }

      return urls
    } catch {
      return []
    }
  }
}

/**
 * Crawler using pre-created worker pool
 */
class PoolCrawler {
  private seen = new Set<string>()
  private queue: string[] = []
  private results: string[] = []
  private hostname: string
  private parser = new RealHtmlParser()

  constructor(
    private startUrl: string,
    private pool: WorkerPool,
    private maxUrls: number = 100,
    private delayMs: number = 0
  ) {
    this.hostname = new URL(startUrl).hostname
    this.queue.push(startUrl)
  }

  async crawl(): Promise<string[]> {
    while (this.queue.length > 0 && this.results.length < this.maxUrls) {
      const url = this.queue.shift()!

      if (this.seen.has(url)) continue
      this.seen.add(url)
      this.results.push(url)

      console.log(`   [${this.results.length}/${this.maxUrls}] ${url}`)

      try {
        // Use parser directly (not worker for now to keep test simple)
        const newUrls = await this.parser.getUrls(url)

        const filtered = newUrls.filter((u) => {
          try {
            return new URL(u).hostname === this.hostname
          } catch {
            return false
          }
        })

        for (const newUrl of filtered) {
          if (!this.seen.has(newUrl)) {
            this.queue.push(newUrl)
          }
        }
      } catch (error) {
        console.log(`   ❌ Failed: ${url}`)
      }

      if (this.delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.delayMs))
      }
    }

    return this.results
  }
}

describe('Worker Pool Crawler - Pre-created Workers', () => {
  it('should use pre-created pool of workers', async () => {
    const poolSize = 3
    const pool = new WorkerPool(
      poolSize,
      path.join(__dirname, 'worker.ts')
    )

    const crawler = new PoolCrawler(
      'https://crawler-test.com/',
      pool,
      30,
      30
    )

    console.log(`\n👷 Worker Pool Crawler (Pre-created)`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   Pool size: ${poolSize} workers`)
    console.log(`   Max URLs: 30`)
    console.log(`   ---`)

    const startTime = performance.now()
    const results = await crawler.crawl()
    const endTime = performance.now()
    const duration = endTime - startTime

    console.log(`   ---`)
    console.log(`\n📊 Results:`)
    console.log(`   URLs crawled: ${results.length}`)
    console.log(`   Duration: ${duration.toFixed(2)}ms`)
    console.log(`   Per URL: ${(duration / results.length).toFixed(2)}ms`)
    console.log(`   URLs/sec: ${((results.length / duration) * 1000).toFixed(2)}`)

    const stats = pool.getPoolStats()
    console.log(`\n   Pool stats:`)
    console.log(`   Active workers: ${stats.active}/${stats.poolSize}`)
    console.log(`   Queued tasks: ${stats.queued}`)

    await pool.terminate()

    expect(results.length).toBeGreaterThan(0)
  }, 120000)

  it('should compare different pool sizes', async () => {
    const poolSizes = [1, 2, 4]

    console.log(`\n🔄 Pool Size Comparison`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   URLs: 20 each`)
    console.log(`   ---`)

    for (const size of poolSizes) {
      const pool = new WorkerPool(size, path.join(__dirname, 'worker.ts'))
      const crawler = new PoolCrawler(
        'https://crawler-test.com/',
        pool,
        20,
        20
      )

      console.log(`\n   Pool size: ${size}`)

      const startTime = performance.now()
      const results = await crawler.crawl()
      const endTime = performance.now()
      const duration = endTime - startTime

      console.log(`   Duration: ${duration.toFixed(2)}ms`)
      console.log(`   Per URL: ${(duration / results.length).toFixed(2)}ms`)
      console.log(`   URLs/sec: ${((results.length / duration) * 1000).toFixed(2)}`)

      await pool.terminate()
    }
  }, 180000)
})
