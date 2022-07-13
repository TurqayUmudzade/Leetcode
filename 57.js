var insert = function (intervals, newInterval) {
  let out = []

  let flag = true
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = newInterval
    const [s, e] = intervals[i]

    if (start > e) {
      out.push(intervals[i])
      continue
    } else if (end < s) {
      out.push(newInterval)
      out.push(intervals[i])
      newInterval = [Number.MAX_SAFE_INTEGER, undefined]
      flag = false
    } else {
      let minStart = Math.min(s, start)
      let maxEnd = Math.max(e, end)
      newInterval = [minStart, maxEnd]
      flag = true
    }
  }

  if (flag) out.push(newInterval)
  return out
}

let intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8]

console.log(insert(intervals, newInterval))
