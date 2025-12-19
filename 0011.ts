function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let max = 0

  while (r > l) {
    let curMax = (r - l) * Math.min(height[l], height[r])
    max = Math.max(max, curMax)
    if (height[l] > height[r]) r--
    else l++
  }

  return max
}

