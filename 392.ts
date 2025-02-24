function isSubsequence(s: string, t: string): boolean {
  if (s == "") return true

  let p = 0
  for (let i = 0; i < t.length; i++) {
    const element = t[i]
    if (element == s[p]) {
      p++
      if (!s[p]) return true
    }
  }

  return false
}
