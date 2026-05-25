/**
 * 778. Swim in Rising Water
 *
 * You are given an n x n integer matrix `grid` where each value grid[i][j]
 * represents the elevation at position (i, j).
 *
 * The rain starts to fall. At time t, the depth of the water everywhere is t.
 * You can swim from a square to another 4-directionally adjacent square if and
 * only if the elevation of both squares is at most t.
 *
 * Find the least time until you can reach bottom right (n-1, n-1) from the top
 * left (0, 0).
 *
 * Approach: Dijkstra's algorithm where the "cost" to reach a cell is
 * max(cost to reach previous cell, elevation of current cell).
 * The answer is the cost to reach (n-1, n-1).
 *
 * Example:
 *   grid = [[0,2],[1,3]] → 3
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;

    // minTime[r][c] = minimum t needed to reach (r, c)
    const minTime = Array.from({ length: n }, () => new Array(n).fill(Infinity));
    minTime[0][0] = grid[0][0];

    // Min-heap: [time, row, col]
    const heap = [[grid[0][0], 0, 0]];

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (heap.length > 0) {
        heap.sort((a, b) => a[0] - b[0]);
        const [time, r, c] = heap.shift();

        if (r === n - 1 && c === n - 1) return time;

        if (time > minTime[r][c]) continue;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;

            const newTime = Math.max(time, grid[nr][nc]);
            if (newTime < minTime[nr][nc]) {
                minTime[nr][nc] = newTime;
                heap.push([newTime, nr, nc]);
            }
        }
    }

    return minTime[n - 1][n - 1];
};

// --- Tests ---
// Example 1: 2x2 grid
console.assert(swimInWater([[0,2],[1,3]]) === 3, "Test 1 failed");

// Example 2: single cell
console.assert(swimInWater([[0]]) === 0, "Test 2 failed");

// Example 3: 3x3 where we must wait for high elevation
console.assert(swimInWater([[0,1,2],[3,4,5],[6,7,8]]) === 8, "Test 3 failed");

// Example 4: larger grid from LeetCode
console.assert(
    swimInWater([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]) === 16,
    "Test 4 failed"
);

console.log("All tests passed for 778-swim-in-rising-water.js");
