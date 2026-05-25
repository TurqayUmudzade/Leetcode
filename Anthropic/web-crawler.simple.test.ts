/**
 * Simple crawler test - no worker threads
 * Single-threaded async crawler for real websites
 */

interface HtmlParser {
  getUrls(url: string): Promise<string[]>
}

/**
 * Real HTML Parser with actual fetching
 */
class FetchHtmlParser implements HtmlParser {
  async getUrls(url: string): Promise<string[]> {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (compatible; SimpleCrawler/1.0)',
        },
      })

      if (!response.ok) {
        console.log(`   ⚠️  ${response.status} ${url}`)
        return []
      }

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
    } catch (error) {
      console.log(`   ❌ Error: ${url}`)
      return []
    }
  }
}

/**
 * Simple single-threaded crawler
 */
class SimpleCrawler {
  private seen = new Set<string>()
  private queue: string[] = []
  private results: string[] = []
  private hostname: string

  constructor(
    private startUrl: string,
    private parser: HtmlParser,
    private maxUrls: number = 100,
    private delayMs: number = 50
  ) {
    this.hostname = new URL(startUrl).hostname
    this.queue.push(startUrl)
  }

  async crawl(): Promise<string[]> {
    let processed = 0

    while (this.queue.length > 0 && this.results.length < this.maxUrls) {
      const url = this.queue.shift()!

      if (this.seen.has(url)) continue
      this.seen.add(url)
      this.results.push(url)
      processed++

      console.log(`   [${this.results.length}/${this.maxUrls}] ${url}`)

      try {
        const newUrls = await this.parser.getUrls(url)

        // Filter to same hostname
        const filtered = newUrls.filter((u) => {
          try {
            return new URL(u).hostname === this.hostname
          } catch {
            return false
          }
        })

        // Add to queue
        for (const newUrl of filtered) {
          if (!this.seen.has(newUrl)) {
            this.queue.push(newUrl)
          }
        }
      } catch (error) {
        console.log(`   ❌ Failed: ${url}`)
      }

      // Respectful delay
      if (this.delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.delayMs))
      }
    }

    return this.results
  }
}

describe('Simple Crawler - No Workers', () => {
  it('should crawl crawler-test.com without workers', async () => {
    const parser = new FetchHtmlParser()
    const crawler = new SimpleCrawler(
      'https://crawler-test.com/',
      parser,
      50,
      50 // 50ms delay
    )

    console.log(`\n🔗 Simple Crawler Test (No Workers)`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   Max URLs: 50`)
    console.log(`   Delay: 50ms`)
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

    expect(results.length).toBeGreaterThan(0)
  }, 120000) // 120 second timeout

  it('should crawl with no delay for max speed', async () => {
    const parser = new FetchHtmlParser()
    const crawler = new SimpleCrawler(
      'https://crawler-test.com/',
      parser,
      30,
      0 // No delay
    )

    console.log(`\n⚡ Max Speed Crawl (No Delay)`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   Max URLs: 30`)
    console.log(`   Delay: 0ms`)
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

    expect(results.length).toBeGreaterThan(0)
  }, 120000)

  it('should crawl small subset for quick test', async () => {
    const parser = new FetchHtmlParser()
    const crawler = new SimpleCrawler(
      'https://crawler-test.com/',
      parser,
      10,
      30
    )

    console.log(`\n🚀 Quick Test (10 URLs)`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   Max URLs: 10`)
    console.log(`   Delay: 30ms`)
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

    console.log(`\n   First 5 URLs:`)
    results.slice(0, 5).forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`)
    })

    expect(results.length).toBeGreaterThan(0)
  }, 60000)
})
