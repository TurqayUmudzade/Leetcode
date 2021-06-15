var strStr = function (haystack, needle) {
  if (!haystack.includes(needle)) return -1;
  if (!haystack || !needle) return 0;

  for (let i = 0; i < haystack.length; i++)
    for (let k = 0; k < needle.length; k++) {
      if (haystack[i + k] != needle[k]) break;
      else if (k == needle.length - 1) return i;
    }
};

console.log(strStr("hello", "ll"));
