/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let str = ""
  let stack = []
  let set = new Set()

  for (let idx = 0; idx < s.length; idx++) {
    const c = s[idx]

    if (c === "(") {
      stack.push(idx)
    } else if (c === ")") {
      if (stack.length) stack.pop()
      else set.add(idx)
    }
  }
  set = new Set([...stack, ...[...set]])

  for (let idx = 0; idx < s.length; idx++) {
    const c = s[idx]
    if (!set.has(idx)) str += c
  }

  return str
}

let s = "a)b(c)d"
// let s = "))(("
console.log("====================================")
console.log(minRemoveToMakeValid(s))
console.log("====================================")

