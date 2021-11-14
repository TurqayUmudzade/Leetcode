var strStr = function (haystack, needle) {
  if (!needle) return 0

  if (needle.length > haystack.length) return -1

  if (needle === haystack) return 0

  let ans = -1
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      ans = i++
      for (let p = 1; p < needle.length; p++, i++) {
        if (haystack[i] !== needle[p]) {
          i = ans
          ans = -1
          break
        }
      }
      if (ans !== -1) return ans
    }
  }
  return ans
};


console.log(strStr("aaa", "aaaa"));