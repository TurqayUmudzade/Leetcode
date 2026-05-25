/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function allValuesZero(map) {
  for (const value of map.values()) {
    if (value !== 0) return false
  }
  return true
}

var minWindow = function (s, t) {
  const map = new Map()
  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  let l = 0

  let bestWindow = ""
  let min = s.length
  for (let r = 0; r < s.length; r++) {
    const rightElement = s[r]
    if (!map.has(rightElement)) continue

    map.set(rightElement, map.get(rightElement) - 1)

    while (allValuesZero(map)) {
      if (r - l + 1 < min) {
        min = r - l + 1
        bestWindow = s.slice(l, r + 1)
      }
      const leftElement = s[l]
      if (!map.has(leftElement)) {
        l++
        continue
      }
      map.set(leftElement, map.get(leftElement) + 1)
      l++
    }
  }

  console.log(min)
  return bestWindow
}

