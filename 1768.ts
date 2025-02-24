var mergeAlternately = function (word1: string, word2: string) {
  const longest = Math.max(word1.length, word2.length)
  let out = ""
  for (let i = 0; i < longest; i++) {
    if (word1[i]) out += word1[i]
    if (word2[i]) out += word2[i]
  }
  return out
}

