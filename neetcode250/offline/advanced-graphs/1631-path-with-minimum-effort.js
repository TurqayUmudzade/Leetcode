/**
 * 1631. Path With Minimum Effort
 *
 * You are given a 2D array `heights` of size rows x columns, where heights[row][col]
 * represents the height of cell (row, col).
 *
 * You are situated in the top-left cell (0, 0) and wish to travel to the bottom-right
 * cell (rows-1, columns-1). You can move up, down, left, or right.
 *
 * The "effort" of a route is defined as the maximum absolute difference in heights
 * between two consecutive cells in the route.
 *
 * Return the minimum effort required to travel from the top-left to the bottom-right.
 *
 * Approach: Dijkstra's algorithm where the "distance" for each cell is the minimum
 * possible effort (max absolute height difference) to reach that cell.
 *
 * Example:
 *   heights = [[1,2,2],[3,8,2],[5,3,5]] → 2
 *   (path: (0,0)→(0,1)→(0,2)→(1,2)→(2,2), max diff = 2)
 */

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    // effort[r][c] = min effort to reach (r, c)
    const effort = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
    effort[0][0] = 0;

    // Min-heap: [effort, row, col]
    // Simple priority queue using a sorted array (sufficient for this problem size)
    const heap = [[0, 0, 0]];

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (heap.length > 0) {
        // Pop minimum effort element
        heap.sort((a, b) => a[0] - b[0]);
        const [currEffort, r, c] = heap.shift();

        if (r === rows - 1 && c === cols - 1) return currEffort;

        if (currEffort > effort[r][c]) continue;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

            const newEffort = Math.max(currEffort, Math.abs(heights[nr][nc] - heights[r][c]));
            if (newEffort < effort[nr][nc]) {
                effort[nr][nc] = newEffort;
                heap.push([newEffort, nr, nc]);
            }
        }
    }

    return effort[rows - 1][cols - 1];
};

// --- Tests ---
// Example 1: standard 3x3 grid
console.assert(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]) === 2, "Test 1 failed");

// Example 2: single cell, no movement needed
console.assert(minimumEffortPath([[7]]) === 0, "Test 2 failed");

// Example 3: flat grid, effort is 0
console.assert(minimumEffortPath([[1,1,1],[1,1,1],[1,1,1]]) === 0, "Test 3 failed");

// Example 4: must go through a high-difference edge
console.assert(minimumEffortPath([[1,10,6,7,9,10,4,9]]) === 9, "Test 4 failed");

console.log("All tests passed for 1631-path-with-minimum-effort.js");
