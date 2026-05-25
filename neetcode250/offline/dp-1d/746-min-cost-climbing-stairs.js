/**
 * 746. Min Cost Climbing Stairs
 *
 * You are given an integer array cost where cost[i] is the cost of the i-th
 * step on a staircase. Once you pay the cost, you can either climb one or two
 * steps. You can either start from the step with index 0, or the step with
 * index 1. Return the minimum cost to reach the top of the floor (beyond the
 * last step).
 *
 * Example 1: cost = [10, 15, 20] → 15
 * Example 2: cost = [1,100,1,1,1,100,1,1,100,1] → 6
 *
 * Constraints:
 *   2 <= cost.length <= 1000
 *   0 <= cost[i] <= 999
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {};

// Tests
console.assert(minCostClimbingStairs([10, 15, 20]) === 15, "Test 1 failed");
console.assert(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]) === 6, "Test 2 failed");
console.assert(minCostClimbingStairs([0, 0]) === 0, "Test 3 failed");
console.assert(minCostClimbingStairs([1, 2, 3]) === 3, "Test 4 failed");
console.log("All tests passed for 746. Min Cost Climbing Stairs");
