function findMaxAverage(nums: number[], k: number): number {
  let sum = 0
  for (let i = 0; i < k; i++) {
    const element = nums[i]
    sum += element
  }
  let max = sum / k

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k]
    max = Math.max(max, sum / k)
  }

  return max
}

