function compress(chars: string[]): number {
  let n = 0
  let cur = 0
  for (let index = 0; index < chars.length; index++) {
    const element = chars[index]
    const next = chars[index + 1]

    n++

    if (n == 1) {
      chars[cur++] = element
    }

    if (element == next) {
      continue
    }

    if (n > 1) {
      for (const c of String(n)) {
        chars[cur++] = c
      }
    }
    n = 0
  }
  chars.splice(cur)
  return chars.length
}
