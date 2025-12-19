function pivotIndex(nums: number[]): number {
  const sum = nums.reduce((sum, item) => sum + item, 0)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - nums[i] - leftSum) return i
    leftSum += nums[i]
  }
  return -1
}

