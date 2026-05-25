/**
 * Test the optimized multi-worker crawler
 * Fetch pool (I/O bound) + Parse pool (CPU bound)
 */

import { crawl } from './main'

describe('Optimized Worker Pool Crawler', () => {
  it('should crawl crawler-test.com with fetch+parse pools', async () => {
    console.log(`\n🚀 Optimized Multi-Worker Crawler`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   Max URLs: 50`)
    console.log(`   Fetch workers: 5 (I/O bound)`)
    console.log(`   Parse workers: CPU cores (CPU bound)`)
    console.log(`   ---`)

    const startTime = performance.now()
    const urls = await crawl('https://crawler-test.com/', 50)
    const endTime = performance.now()
    const duration = endTime - startTime

    console.log(`   ---`)
    console.log(`\n📊 Results:`)
    console.log(`   URLs crawled: ${urls.length}`)
    console.log(`   Duration: ${duration.toFixed(2)}ms`)
    console.log(`   Per URL: ${(duration / urls.length).toFixed(2)}ms`)
    console.log(`   URLs/sec: ${((urls.length / duration) * 1000).toFixed(2)}`)

    console.log(`\n   First 10 URLs:`)
    urls.slice(0, 10).forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`)
    })

    if (urls.length > 10) {
      console.log(`   ... and ${urls.length - 10} more`)
    }

    expect(urls.length).toBeGreaterThan(0)
    expect(urls[0]).toBe('https://crawler-test.com/')
  }, 120000) // 2 minute timeout

  it('should crawl larger set efficiently', async () => {
    console.log(`\n📈 Larger Crawl (100 URLs)`)
    console.log(`   Target: https://crawler-test.com/`)
    console.log(`   ---`)

    const startTime = performance.now()
    const urls = await crawl('https://crawler-test.com/', 100)
    const endTime = performance.now()
    const duration = endTime - startTime

    console.log(`   ---`)
    console.log(`\n📊 Results:`)
    console.log(`   URLs crawled: ${urls.length}`)
    console.log(`   Duration: ${duration.toFixed(2)}ms`)
    console.log(`   Per URL: ${(duration / urls.length).toFixed(2)}ms`)
    console.log(`   URLs/sec: ${((urls.length / duration) * 1000).toFixed(2)}`)

    expect(urls.length).toBeGreaterThan(0)
  }, 180000) // 3 minute timeout
})
