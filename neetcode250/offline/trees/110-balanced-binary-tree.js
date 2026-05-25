/**
 * 110. Balanced Binary Tree
 *
 * Given a binary tree, determine if it is height-balanced. A height-balanced
 * binary tree is one in which the depth of the two subtrees of every node
 * never differs by more than 1.
 *
 * Example 1:
 *   Input:  [3, 9, 20, null, null, 15, 7]
 *   Output: true
 *
 * Example 2:
 *   Input:  [1, 2, 2, 3, 3, null, null, 4, 4]
 *   Output: false
 *
 * Constraints:
 *   - Number of nodes: [0, 5000]
 *   - -10^4 <= Node.val <= 10^4
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0
  this.left = left ?? null
  this.right = right ?? null
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true

  const dfs = (node) => {
    if (!node) return 0
    const left = dfs(node.left)
    const right = dfs(node.right)
    if (Math.abs(right - left) > 1) flag = false
    return Math.max(left, right) + 1
  }

  dfs(root)
  return flag
}

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [3,9,20,null,null,15,7] → true
const t1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
)
console.assert(isBalanced(t1) === true, "Test 1 failed")

// Test 2: [1,2,2,3,3,null,null,4,4] → false
const t2 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(4), new TreeNode(4)),
    new TreeNode(3),
  ),
  new TreeNode(2),
)
console.assert(isBalanced(t2) === false, "Test 2 failed")

// Test 3: null → true
console.assert(isBalanced(null) === true, "Test 3 failed")

// Test 4: skewed tree [1,2,null,3] → false
const t4 = new TreeNode(1, new TreeNode(2, new TreeNode(3)))
console.assert(isBalanced(t4) === false, "Test 4 failed")

console.log("All tests passed for 110-balanced-binary-tree")

