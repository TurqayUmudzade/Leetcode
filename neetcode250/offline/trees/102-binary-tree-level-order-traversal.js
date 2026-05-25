/**
 * 102. Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values (i.e., left to right, level by level).
 *
 * Example:
 *   Input:  [3, 9, 20, null, null, 15, 7]
 *   Output: [[3], [9, 20], [15, 7]]
 *
 * Constraints:
 *   - Number of nodes: [0, 2000]
 *   - -1000 <= Node.val <= 1000
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]
const t1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.assert(JSON.stringify(levelOrder(t1)) === JSON.stringify([[3], [9, 20], [15, 7]]), "Test 1 failed");

// Test 2: null → []
console.assert(JSON.stringify(levelOrder(null)) === JSON.stringify([]), "Test 2 failed");

// Test 3: single node → [[1]]
console.assert(JSON.stringify(levelOrder(new TreeNode(1))) === JSON.stringify([[1]]), "Test 3 failed");

// Test 4: [1,2,3,4,5] → [[1],[2,3],[4,5]]
const t4 = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.assert(JSON.stringify(levelOrder(t4)) === JSON.stringify([[1], [2, 3], [4, 5]]), "Test 4 failed");

console.log("All tests passed for 102-binary-tree-level-order-traversal");
