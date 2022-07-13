const merge = (arr) => {
  if (arr.length === 1) return arr
  arr.sort((a, b) => a[0] - b[0])

  let ans = [arr[0]]
  for (let i = 0; i < arr.length - 1; i++) {
    const [s1, e1] = ans[ans.length - 1]
    const [s2, e2] = arr[i + 1]
    if (e1 < s2) {
      ans.push(arr[i + 1])
    } else {
      ans.pop()
      ans.push([s1, Math.max(e1, e2)])
    }
  }

  return ans
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log(merge(intervals))
