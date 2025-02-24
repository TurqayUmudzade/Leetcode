function increasingTriplet(nums: number[]): boolean {
  let n1 = Number.MAX_SAFE_INTEGER
  let n2 = Number.MAX_SAFE_INTEGER

  for (const n of nums) {
    if (n > n1 && n > n2) return true
    if (n < n1) n1 = n
    if (n < n2 && n > n1) n2 = n
  }

  return false
}

