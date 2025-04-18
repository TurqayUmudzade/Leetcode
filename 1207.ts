function uniqueOccurrences(arr: number[]): boolean {
  let map = new Map()
  for (const element of arr) map.set(element, (map.get(element) || 0) + 1)

  return new Set(map.values()).size == map.size
}

