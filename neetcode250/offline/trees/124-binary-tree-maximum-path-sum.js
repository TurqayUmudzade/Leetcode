/**
 * 124. Binary Tree Maximum Path Sum
 *
 * A path in a binary tree is a sequence of nodes where each pair of adjacent
 * nodes has an edge connecting them. A node can only appear once in the path,
 * and the path does not need to pass through the root.
 * The path sum is the sum of the node's values in the path.
 * Given the root of a binary tree, return the maximum path sum of any
 * non-empty path.
 *
 * Example 1:
 *   Input:  [1, 2, 3]
 *   Output: 6   (2 → 1 → 3)
 *
 * Example 2:
 *   Input:  [-10, 9, 20, null, null, 15, 7]
 *   Output: 42  (15 → 20 → 7)
 *
 * Constraints:
 *   - Number of nodes: [1, 3×10^4]
 *   - -1000 <= Node.val <= 1000
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
var maxPathSum = function (root) {
  let max = -Infinity

  const dfs = (node) => {
    if (!node) return 0
    const left = dfs(node.left)
    const right = dfs(node.right)
    max = Math.max(left + right + node.val, max)
    return Math.max(left + node.val, right + node.val, 0)
  }

  dfs(root)
  return max
}

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1,2,3] → 6
const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.assert(maxPathSum(t1) === 6, "Test 1 failed")

// Test 2: [-10,9,20,null,null,15,7] → 42
const t2 = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
)
console.assert(maxPathSum(t2) === 42, "Test 2 failed")

// Test 3: all negative [-3] → -3
console.assert(maxPathSum(new TreeNode(-3)) === -3, "Test 3 failed")

// Test 4: [-1,-2,-3] → -1 (best is just the root)
const t4 = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3))
console.assert(maxPathSum(t4) === -1, "Test 4 failed")

console.log("All tests passed for 124-binary-tree-maximum-path-sum")

