const gcdOfStrings = (str1, str2) => {
  // If the concatenated strings are not equal,
  // then a common divisor cannot be found
  if (str1 + str2 !== str2 + str1) {
    return ""
  }

  // Calculate the greatest common divisor of the string lengths
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const len = gcd(str1.length, str2.length)

  // Return the substring that is a common divisor
  return str1.substring(0, len)
}
