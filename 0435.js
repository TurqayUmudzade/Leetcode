var eraseOverlapIntervals = function (intervals) {
  if (arr.length === 1) return 0
  arr.sort((a, b) => a[0] - b[0])
  let c = 0
  for (let i = 0; i < intervals.length; i++) {
    const [s1, e1] = intervals[i]
    const [s2, e2] = intervals[i + 1]

    if (e1 < s2) {
      continue
    }



  }
}
