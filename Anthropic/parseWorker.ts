import { parentPort } from "worker_threads"

if (!parentPort) throw new Error("Must be run as a worker")

parentPort.on(
  "message",
  ({ html, baseUrl }: { html: string; baseUrl: string }) => {
    const urls = extractUrls(html, baseUrl)
    parentPort!.postMessage(urls)
  },
)

function extractUrls(html: string, base: string): string[] {
  const urls: string[] = []

  // extract href and src attributes
  const patterns = [/href\s*=\s*"([^"]+)"/gi, /href\s*=\s*'([^']+)'/gi]

  for (const pattern of patterns) {
    let match: RegExpExecArray | null
    while ((match = pattern.exec(html)) !== null) {
      const raw = match[1].trim()
      if (
        !raw ||
        raw.startsWith("#") ||
        raw.startsWith("mailto:") ||
        raw.startsWith("javascript:")
      ) {
        continue
      }
      try {
        const resolved = new URL(raw, base).href
        urls.push(resolved)
      } catch {
        // invalid URL — skip
      }
    }
  }

  return [...new Set(urls)] // dedupe within this page
}
