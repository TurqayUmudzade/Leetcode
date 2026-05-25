/**
 * 286. Walls and Gates
 *
 * You are given an m x n grid rooms initialized with these three possible values:
 *   -1  — A wall or an obstacle.
 *    0  — A gate.
 *    INF — Infinity means an empty room. We use the value 2^31 - 1 = 2147483647
 *          to represent INF as you may assume that the distance to a gate is
 *          less than 2147483647.
 *
 * Fill each empty room with the distance to its nearest gate. If it is impossible
 * to reach a gate, it should remain INF.
 *
 * Modify the grid in-place and return it.
 *
 * Example:
 *   INF = 2147483647
 *   rooms = [
 *     [INF, -1,  0, INF],
 *     [INF, INF, INF, -1],
 *     [INF, -1, INF, -1],
 *     [  0, -1, INF, INF]
 *   ]
 *   After fill:
 *   [
 *     [3, -1, 0, 1],
 *     [2,  2, 1,-1],
 *     [1, -1, 2,-1],
 *     [0, -1, 3, 4]
 *   ]
 *
 * Constraints:
 *   - m == rooms.length
 *   - n == rooms[i].length
 *   - 1 <= m, n <= 250
 *   - rooms[i][j] is -1, 0, or 2^31 - 1
 */

const INF = 2147483647;

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {

};

// Tests
const grid1 = [
  [INF, -1,  0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [  0, -1, INF, INF]
];
wallsAndGates(grid1);
console.assert(
  JSON.stringify(grid1) === JSON.stringify([
    [3, -1, 0, 1],
    [2,  2, 1,-1],
    [1, -1, 2,-1],
    [0, -1, 3, 4]
  ]),
  'Test 1 failed: grid did not match expected output'
);

const grid2 = [[-1]];
wallsAndGates(grid2);
console.assert(
  JSON.stringify(grid2) === JSON.stringify([[-1]]),
  'Test 2 failed: wall-only grid should be unchanged'
);

const grid3 = [[0, INF]];
wallsAndGates(grid3);
console.assert(
  JSON.stringify(grid3) === JSON.stringify([[0, 1]]),
  'Test 3 failed: expected [[0, 1]]'
);

const grid4 = [[INF, INF], [INF, 0]];
wallsAndGates(grid4);
console.assert(
  JSON.stringify(grid4) === JSON.stringify([[2,1],[1,0]]),
  'Test 4 failed: expected [[2,1],[1,0]]'
);

console.log('All tests passed for 286-walls-and-gates');
