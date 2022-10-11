var insert = function (intervals, newInterval) {
  let out = []
  for (let i = 0; i < intervals.length; i++) {
    let [newStart, newEnd] = newInterval
    const [start, end] = intervals[i];
    if (end < newStart) {
      out.push(intervals[i])
    } else if (newEnd < start) {
      out.push(newInterval)
      newInterval = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
      out.push(intervals[i])
    }
    else {
      newStart = Math.min(newStart, start)
      newEnd = Math.max(end, newEnd)
      newInterval = [newStart, newEnd]
    }

  }


  if (newInterval[0] != Number.MAX_SAFE_INTEGER) {
    out.push(newInterval)
  }

  return out
}

let intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
  [22, 26],
],
  newInterval = [4, 8]

console.log(insert(intervals, newInterval))
