var crawl = function (startUrl, htmlParser) {
    const hostname = startUrl.split("/")[2]
    let q = [startUrl]
    const seen = new Set(q)
    while (q.length) {
        const cur = q.shift()
        for (const link of htmlParser.getUrls(cur)) {
            if (!seen.has(link) && link.includes(hostname)) {
                seen.add(link)
                q.push(link)
            }
        }
    }

    return [...seen.values()];
};