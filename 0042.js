/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 0,3 0 = 0
  // 0 3 1 = 0
  // 1 3 0 = 1
  // 1 3 (2) = 0
  // 2 3 (1) = 1
  // 2 3 (0) = Math.min

  const n = height.length
  let leftMax = new Array(n).fill(0)
  let rightMax = new Array(n).fill(0)
  let out = 0

  for (let i = 1; i < n; i++) {
    const prev = height[i - 1]
    leftMax[i] = Math.max(prev, leftMax[i - 1])
  }

  for (let i = n - 2; i >= 0; i--) {
    const prev = height[i + 1]
    rightMax[i] = Math.max(prev, rightMax[i + 1])
  }

  for (let i = 1; i < n - 1; i++) {
    const curLeftMax = leftMax[i]
    const curRightMax = rightMax[i]
    const curHeight = height[i]
    if (curLeftMax == 0 || curRightMax == 0) continue
    const maxWater = Math.min(curLeftMax, curRightMax) - curHeight
    if (maxWater <= 0) continue
    out = out + maxWater
  }
  return out
}
