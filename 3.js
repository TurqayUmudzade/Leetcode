var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let max = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) set.clear();

    set.add(s[i]);

    max = Math.max(max, set.size);
  }
  return max;
};

lengthOfLongestSubstring("aab");

for (let i = 0; i < arr; i++) {
  const element = arr[i];
}
