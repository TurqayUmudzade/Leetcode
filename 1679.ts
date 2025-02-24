function maxOperations(nums: number[], k: number): number {
  const map = new Map()
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]

    let target = k - element
    if (map.get(target)) {
      res++
      map.set(target, map.get(target) - 1)
    } else map.set(element, (map.get(element) || 0) + 1)
  }

  return res
}

