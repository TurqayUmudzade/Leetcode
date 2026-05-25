/**
 * Real website crawler test
 * Tests against an actual website with real HTML fetching
 */

interface HtmlParser {
  getUrls(url: string): Promise<string[]>
}

/**
 * Real HTML Parser - fetches and extracts links from actual websites
 */
class RealHtmlParser implements HtmlParser {
  async getUrls(url: string): Promise<string[]> {
    try {
      const response = await fetch(url)
      if (!response.ok) return []

      const html = await response.text()
      const urls: string[] = []

      // Extract href attributes
      const hrefRegex = /href=["']([^"']+)["']/g
      let match

      while ((match = hrefRegex.exec(html)) !== null) {
        try {
          const absoluteUrl = new URL(match[1], url).href
          urls.push(absoluteUrl)
        } catch {
          // Invalid URL, skip
        }
      }

      return urls
    } catch (error) {
      console.error(`Error fetching ${url}:`, error)
      return []
    }
  }
}

/**
 * Async crawler for real websites
 */
async function crawlAsync(
  startUrl: string,
  htmlParser: HtmlParser,
  maxUrls: number = 100
): Promise<string[]> {
  const hostname = new URL(startUrl).hostname
  const queue = [startUrl]
  const seen = new Set<string>()
  const results: string[] = []

  while (queue.length > 0 && results.length < maxUrls) {
    const curUrl = queue.shift()!

    if (seen.has(curUrl)) continue
    seen.add(curUrl)
    results.push(curUrl)

    console.log(`[${results.length}] Crawled: ${curUrl}`)

    try {
      const newUrls = await htmlParser.getUrls(curUrl)

      // Filter to same hostname
      const sameHostUrls = newUrls.filter(
        (url) => new URL(url).hostname === hostname
      )

      // Add unvisited URLs to queue
      for (const url of sameHostUrls) {
        if (!seen.has(url) && results.length < maxUrls) {
          queue.push(url)
        }
      }
    } catch (error) {
      console.error(`Error processing ${curUrl}:`, error)
    }

    // Add a small delay to be respectful to the server
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  return results
}

describe('Web Crawler - Real Website', () => {
  it('should crawl https://crawler-test.com/', async () => {
    const parser = new RealHtmlParser()
    const maxUrls = 50 // Limit to 50 URLs for testing

    console.log(`\n🌐 Real Website Crawler Test`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   Max URLs: ${maxUrls}`)
    console.log(`   ---`)

    const startTime = performance.now()
    const urls = await crawlAsync(
      'https://crawler-test.com/',
      parser,
      maxUrls
    )
    const endTime = performance.now()

    console.log(`   ---`)
    console.log(`   Total URLs crawled: ${urls.length}`)
    console.log(`   Time taken: ${(endTime - startTime).toFixed(2)}ms`)
    console.log(`   Avg time per URL: ${((endTime - startTime) / urls.length).toFixed(2)}ms`)

    // Print crawled URLs
    console.log(`\n   Crawled URLs:`)
    urls.forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`)
    })

    expect(urls.length).toBeGreaterThan(0)
    expect(urls[0]).toBe('https://crawler-test.com/')
  }, 60000) // 60 second timeout for network requests
})
