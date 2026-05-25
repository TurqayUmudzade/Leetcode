/**
 * 94. Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its
 * nodes' values (left → root → right).
 *
 * Example:
 *   Input:  [1, null, 2, 3]   (root=1, right=2, right.left=3)
 *   Output: [1, 3, 2]
 *
 * Constraints:
 *   - Number of nodes: [0, 100]
 *   - -100 <= Node.val <= 100
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0
  this.left = left ?? null
  this.right = right ?? null
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const arr = []

  const dfs = (node) => {
    if (!node) return

    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
  }

  dfs(root)

  return arr
}

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1, null, 2, 3] → [1, 3, 2]
const t1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))
console.assert(
  JSON.stringify(inorderTraversal(t1)) === JSON.stringify([1, 3, 2]),
  "Test 1 failed",
)

// Test 2: empty tree → []
console.assert(
  JSON.stringify(inorderTraversal(null)) === JSON.stringify([]),
  "Test 2 failed",
)

// Test 3: single node [1] → [1]
console.assert(
  JSON.stringify(inorderTraversal(new TreeNode(1))) === JSON.stringify([1]),
  "Test 3 failed",
)

// Test 4: [1, 2, 3] → [2, 1, 3]
const t4 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.assert(
  JSON.stringify(inorderTraversal(t4)) === JSON.stringify([2, 1, 3]),
  "Test 4 failed",
)

console.log("All tests passed for 94-binary-tree-inorder-traversal")

