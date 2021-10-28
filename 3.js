// const lengthOfLongestSubstring = (s) => {
//   if (!s) return 0
//   let map = new Map()
//   let max = 0
//   let start = 0

//   for (let i = 0; i < s.length; i++) {

//     if (map.has(s[i])) {
//       start = Math.max(start, map.get(s[i]) + 1)
//     }
//     max = Math.max(max, i - start + 1)
//     map.set(s[i], i)

//   }

//   return max
// }


function lengthOfLongestSubstring(s) {
  if (!s) return 0
  let map = new Map();
  let max = 0;
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      l = Math.max(map.get(s[i]) + 1, l)
    }
    map.set(s[i], i)
    max = Math.max(max, i - l + 1)

  }
  return max

}

console.log(lengthOfLongestSubstring('abba'));