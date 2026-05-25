/**
 * 226. Invert Binary Tree
 *
 * Given the root of a binary tree, invert the tree (mirror it), and return
 * its root. Every node's left and right children are swapped recursively.
 *
 * Example:
 *   Input:  [4, 2, 7, 1, 3, 6, 9]
 *   Output: [4, 7, 2, 9, 6, 3, 1]
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

function sameTree(a, b) {
  if (!a && !b) return true
  if (!a || !b) return false
  return (
    a.val === b.val && sameTree(a.left, b.left) && sameTree(a.right, b.right)
  )
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const invert = (root) => {
    if (!root) return
    const dummy = root.left
    root.left = root.right
    root.right = dummy
    invert(root.left)
    invert(root.right)
  }
  invert(root)
  return root
}

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]
const t1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)),
)
const expected1 = new TreeNode(
  4,
  new TreeNode(7, new TreeNode(9), new TreeNode(6)),
  new TreeNode(2, new TreeNode(3), new TreeNode(1)),
)
console.assert(sameTree(invertTree(t1), expected1), "Test 1 failed")

// Test 2: [2,1,3] → [2,3,1]
const t2 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
const expected2 = new TreeNode(2, new TreeNode(3), new TreeNode(1))
console.assert(sameTree(invertTree(t2), expected2), "Test 2 failed")

// Test 3: null → null
console.assert(invertTree(null) === null, "Test 3 failed")

// Test 4: single node [1] → [1]
console.assert(
  sameTree(invertTree(new TreeNode(1)), new TreeNode(1)),
  "Test 4 failed",
)

console.log("All tests passed for 226-invert-binary-tree")

