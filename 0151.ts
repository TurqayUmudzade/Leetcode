function reverseWords(s: string): string {
  const words: string[] = []
  let word = ""
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char == " ") {
      if (word) words.push(word)
      word = ""
    } else {
      word += char
    }
  }
  if (word) words.push(word)
  return words.reverse().join(" ")
}

