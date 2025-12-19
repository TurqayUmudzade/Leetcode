var longestCommonPrefix = function (strs) {
  let ans = ""

  for (let i = 0; i < strs[0].length; i++) {

    let c = strs[0][i]

    for (const str of strs) {
      if (c != str[i]) return ans
    }

    ans += c

  }

  return ans
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]))