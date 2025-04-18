function closeStrings(word1: string, word2: string): boolean {
  let map1 = new Map()
  let map2 = new Map()
  for (const element of word1) map1.set(element, (map1.get(element) || 0) + 1)
  for (const element of word2) map2.set(element, (map2.get(element) || 0) + 1)

  let freq1 = new Set(map1.values())
  let freq2 = new Set(map2.values())

  return [...freq1].every((e) => freq2.has(e)) && map1.size == map2.size
}

