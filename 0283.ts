/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let p = 0

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]

    if (!element) continue

    nums[p++] = element
  }

  for (let i = p; i < nums.length; i++) {
    nums[i] = 0
  }
}

