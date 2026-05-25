/**
 * 70. Climbing Stairs
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * Example 1: n = 2 → 2   (1+1, 2)
 * Example 2: n = 3 → 3   (1+1+1, 1+2, 2+1)
 * Example 3: n = 5 → 8
 *
 * Constraints: 1 <= n <= 45
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const seen = new Map()

  const dfs = (cur) => {
    if (seen.has(cur)) return seen.get(cur)
    if (cur > n) return 0
    if (cur == n) return 1

    const ways = dfs(cur + 1) + dfs(cur + 2)
    seen.set(n, ways)
    return ways
  }

  return dfs(0)
}

// Tests
console.assert(climbStairs(1) === 1, "Test 1 failed")
console.assert(climbStairs(2) === 2, "Test 2 failed")
console.assert(climbStairs(3) === 3, "Test 3 failed")
console.assert(climbStairs(5) === 8, "Test 4 failed")
console.log("All tests passed for 70. Climbing Stairs")

