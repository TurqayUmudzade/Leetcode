function validWordAbbreviation(word: string, abbr: string): boolean {
  let number = 0
  let len = 0
  for (const [index, c] of [abbr].entries()) {
    if (isNaN(Number(c))) {
      if (number) {
        len += number
        number = 0
      }
      if (word[len] !== abbr[index]) return false

      len++
      continue
    }

    if (c == "0" && number == 0) {
      return false
    }

    number = number * 10 + Number(c)
  }
  len += number

  if (word.length !== len) return false

  return true
}

//ord = "internationalization",
// abbr "i12iz4n"

