var strStr = function (haystack, needle) {
  if (!needle) return 0
  let idx = 0
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] != needle[idx]) {
      i = i - idx
      idx = 0
    } else {
      if (idx == needle.length - 1) return i - idx
      idx++
    }
  }
  return -1
};