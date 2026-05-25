/**
 * 104. Maximum Depth of Binary Tree
 *
 * Given the root of a binary tree, return its maximum depth. The maximum
 * depth is the number of nodes along the longest path from the root node
 * down to the farthest leaf node.
 *
 * Example:
 *   Input:  [3, 9, 20, null, null, 15, 7]
 *   Output: 3
 *
 * Constraints:
 *   - Number of nodes: [0, 10^4]
 *   - -100 <= Node.val <= 100
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0
  this.left = left ?? null
  this.right = right ?? null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [3,9,20,null,null,15,7] → 3
const t1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
)
console.assert(maxDepth(t1) === 3, "Test 1 failed")

// Test 2: [1,null,2] → 2
const t2 = new TreeNode(1, null, new TreeNode(2))
console.assert(maxDepth(t2) === 2, "Test 2 failed")

// Test 3: null → 0
console.assert(maxDepth(null) === 0, "Test 3 failed")

// Test 4: single node → 1
console.assert(maxDepth(new TreeNode(42)) === 1, "Test 4 failed")

console.log("All tests passed for 104-maximum-depth-of-binary-tree")

