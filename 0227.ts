function calculate(s: string): number {
  const stack: any[] = []
  let cur: any = ""
  let op = "+"

  for (let i = 0; i <= s.length; i++) {
    const char = s[i]
    if (!isNaN(Number(char))) cur = cur + char
    if ((isNaN(Number(char)) && char != " ") || i === s.length) {
      if (op == "+") stack.push(Number(cur))
      else if (op == "-") stack.push(Number(cur) * -1)
      else if (op == "*") stack.push(stack.pop() * Number(cur))
      else if (op == "/") stack.push(Math.trunc(stack.pop() / Number(cur)))
      cur = ""
      op = char
    }
  }

  let res = 0

  for (const n of stack) {
    res += n
  }

  return res
}

