const lengthOfLongestSubstring = (s) => {
  if (!s) return 0

  let max = 0
  let map = new Map()

  for (let right = 0, left = 0; right < s.length; right++) {

    if (map.has(s[right])) left = Math.max(left, map.get(s[right]) + 1)
    map.set(s[right], right)
    max = Math.max(max, right - left + 1)
  }
  return max
}

lengthOfLongestSubstring("dvdf");

const lengthOfLongestSubstring = (s) => {
  if (!s) return 0
  let max = 0
  let left = 0
  let right = 0
  let chars = new Array(26)

  while (right < s.length) {

    if (chars[s[right]]) left = Math.max(left, chars[s[right]] + 1)

    chars[s[right]] = new Number(right)
    max = Math.max(max, right - left + 1)
    right++
  }

  return max
}




