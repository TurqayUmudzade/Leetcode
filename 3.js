var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let max = 0;
  let map = new Map()

  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i]) + 1)
    }
    map.set(s[i], i)

    max = Math.max(max, i - j + 1);
  }
  return max;
};

lengthOfLongestSubstring("dbdv");

