function minRemoveToMakeValid(s: string): string {
  let stack: number[] = []
  let invalid = new Set()

  for (const [index, char] of [...s].entries()) {
    //skip just c
    if (!(char == "(" || char == ")")) {
      continue
    }

    if (char == "(") {
      stack.push(index)
    } else if (char == ")") {
      if (stack.length) {
        stack.pop()
        continue
      }
      invalid.add(index)
    }
  }

  invalid = new Set([...invalid, ...stack])

  let out = ""

  for (const [index, char] of [...s].entries()) {
    if (invalid.has(index)) continue
    out += char
  }

  return out
}

//(())
//lee(t(c)o)de)
// leetcode
// 4,6,8.9
//add them again

