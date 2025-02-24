function reverseVowels(s: string): string {
  const map = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
  let str = [...s]
  let vowels = str.filter((c) => map.has(c)).reverse()
  let p = 0
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      str[i] = vowels[p++]
    }
  }
  return str.join("")
}

