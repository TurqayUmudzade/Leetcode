var countOdds = function (low, high) {
  if (low % 2 == 0) return (high - low + 1 / 2) | 0
  return ((high - low / 2) | 0) + 1
}
