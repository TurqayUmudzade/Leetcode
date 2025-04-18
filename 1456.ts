function maxVowels(s: string, k: number): number {
  const isVowel = (c) => new Set(["a", "e", "i", "o", "u"]).has(c)

  let cur = 0
  for (let i = 0; i < k; i++) {
    const element = s[i]
    if (isVowel(element)) {
      cur++
    }
  }
  let max = cur

  for (let i = k; i < s.length; i++) {
    const element = s[i]
    const leftItem = s[i - k]
    if (isVowel(element)) {
      cur++
    }

    if (isVowel(leftItem)) {
      cur--
    }
    max = Math.max(cur, max)
  }

  return max
}

