/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length
  const out = new Array(n).fill(0)
  const stack = []

  for (let i = n - 1; i >= 0; i--) {
    const cur = temperatures[i]

    while (stack.length && temperatures[stack[stack.length - 1]] <= cur) {
      stack.pop()
    }

    if (stack.length) {
      out[i] = stack[stack.length - 1] - i
    }

    stack.push(i)
  }

  return out
}

