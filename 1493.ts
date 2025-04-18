function longestSubarray(nums: number[]): number {
  let l = 0
  let max = 0
  let zero_index = nums[0] == 0 ? 0 : -1
  for (let r = 0; r < nums.length; r++) {
    const element = nums[r]
    if (element == 0) {
      if (zero_index != -1) l = zero_index
      zero_index = r
    }

    let cur = r - l + (zero_index ? 0 : 1)
    max = Math.max(cur, max)
  }

  return max
}

