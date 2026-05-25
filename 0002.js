/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const q = []

  function inBounds(i, j) {
    return i >= 0 && i < m && j >= 0 && j < n
  }

  const dirs = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1], // left
  ]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) q.push([i, j, 0])
    }
  }

  while (q.length) {
    const len = q.length
    for (let iter = 0; iter < len; iter++) {
      const [i, j, level] = q.shift()

      if (!inBounds(i, j)) continue
      grid[i][j] = Math.max(grid[i][j], level)
      for (const [di, dj] of dirs) {
        q.push(di + i, dj + j, level + 1)
      }
    }
  }
}
