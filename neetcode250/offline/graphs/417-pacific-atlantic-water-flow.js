/**
 * 417. Pacific Atlantic Water Flow
 *
 * There is an m x n rectangular island that borders both the Pacific Ocean and
 * Atlantic Ocean. The Pacific Ocean touches the island's left and top edges,
 * and the Atlantic Ocean touches the island's right and bottom edges.
 *
 * The island is partitioned into a grid of square cells. You are given an m x n
 * integer matrix heights where heights[r][c] represents the height above sea
 * level of the cell at coordinate (r, c).
 *
 * The island receives a lot of rain, and the rain water can flow to neighboring
 * cells directly north, south, east, and west if the neighboring cell's height
 * is less than or equal to the current cell's height. Water can flow from any
 * cell adjacent to an ocean into that ocean.
 *
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes
 * that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 *
 * Example:
 *   heights = [
 *     [1,2,2,3,5],
 *     [3,2,3,4,4],
 *     [2,4,5,3,1],
 *     [6,7,1,4,5],
 *     [5,1,1,2,4]
 *   ]
 *   => [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 *
 * Constraints:
 *   - m == heights.length
 *   - n == heights[i].length
 *   - 1 <= m, n <= 200
 *   - 0 <= heights[i][j] <= 10^5
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {

};

// Helper: sort result for deterministic comparison
function sortResult(arr) {
  if (!arr) return null;
  return arr.slice().sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
}

// Test 1: standard example
console.assert(
  JSON.stringify(sortResult(pacificAtlantic([
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
  ]))) === JSON.stringify([[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]),
  'Test 1 failed'
);

// Test 2: single cell — flows to both oceans
console.assert(
  JSON.stringify(sortResult(pacificAtlantic([[1]]))) === JSON.stringify([[0,0]]),
  'Test 2 failed: expected [[0,0]]'
);

// Test 3: 1x2 grid
console.assert(
  JSON.stringify(sortResult(pacificAtlantic([[1,2]]))) === JSON.stringify([[0,0],[0,1]]),
  'Test 3 failed: expected [[0,0],[0,1]]'
);

// Test 4: uniform heights — all cells flow to both oceans
console.assert(
  JSON.stringify(sortResult(pacificAtlantic([[3,3],[3,3]]))) === JSON.stringify([[0,0],[0,1],[1,0],[1,1]]),
  'Test 4 failed: expected all 4 cells'
);

console.log('All tests passed for 417-pacific-atlantic-water-flow');
