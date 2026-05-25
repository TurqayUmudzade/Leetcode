/**
 * 427. Construct Quad Tree
 *
 * Given an n×n binary matrix grid, return an object representing the QuadTree
 * of that grid. A QuadTree is built by:
 *   - If all values in the current region are the same → create a leaf node
 *     with isLeaf=true and val=grid[r][c].
 *   - Otherwise → split into four equal quadrants (topLeft, topRight,
 *     bottomLeft, bottomRight) and recurse.
 *
 * Node structure:
 *   val      - true (1) or false (0)
 *   isLeaf   - true if this node is a leaf
 *   topLeft, topRight, bottomLeft, bottomRight - child Nodes (null for leaf)
 *
 * Example:
 *   Input:  grid = [[0,1],[1,0]]
 *   Output: Node with isLeaf=false, four leaf children
 *
 * Constraints:
 *   - n == grid.length == grid[i].length
 *   - n is a power of 2, 1 <= n <= 64
 *   - grid[i][j] is 0 or 1
 */

function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft ?? null;
  this.topRight = topRight ?? null;
  this.bottomLeft = bottomLeft ?? null;
  this.bottomRight = bottomRight ?? null;
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: all-same grid → single leaf node
const r1 = construct([[1, 1], [1, 1]]);
console.assert(r1.isLeaf === true && r1.val === true, "Test 1 failed");

// Test 2: [[0,1],[1,0]] → not a leaf, four leaf children
const r2 = construct([[0, 1], [1, 0]]);
console.assert(r2.isLeaf === false, "Test 2 failed - root should not be leaf");
console.assert(r2.topLeft.isLeaf === true, "Test 2 failed - topLeft should be leaf");
console.assert(r2.topRight.isLeaf === true, "Test 2 failed - topRight should be leaf");
console.assert(r2.bottomLeft.isLeaf === true, "Test 2 failed - bottomLeft should be leaf");
console.assert(r2.bottomRight.isLeaf === true, "Test 2 failed - bottomRight should be leaf");

// Test 3: 1×1 grid → always a leaf
const r3 = construct([[1]]);
console.assert(r3.isLeaf === true && r3.val === true, "Test 3 failed");

// Test 4: [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]] → root has two leaf halves
const r4 = construct([[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]);
console.assert(r4.isLeaf === false, "Test 4 failed - root should not be leaf");
console.assert(r4.topLeft.isLeaf === true && r4.topLeft.val === true, "Test 4 topLeft failed");
console.assert(r4.topRight.isLeaf === true && r4.topRight.val === false, "Test 4 topRight failed");

console.log("All tests passed for 427-construct-quad-tree");
