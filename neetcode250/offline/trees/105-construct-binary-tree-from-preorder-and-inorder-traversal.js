/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 *
 * Given two integer arrays preorder and inorder where:
 *   - preorder is the preorder traversal of a binary tree
 *   - inorder is the inorder traversal of the same tree
 * Construct and return the binary tree.
 *
 * Example:
 *   Input:  preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
 *   Output: [3, 9, 20, null, null, 15, 7]
 *
 * Constraints:
 *   - 1 <= preorder.length <= 3000
 *   - preorder.length === inorder.length
 *   - -3000 <= values <= 3000
 *   - All values are unique
 *   - inorder is a permutation of preorder
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {}

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: preorder=[3,9,20,15,7], inorder=[9,3,15,20,7] → [3,9,20,null,null,15,7]
const expected1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
)
console.assert(
  sameTree(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]), expected1),
  "Test 1 failed",
)

// Test 2: single element
const expected2 = new TreeNode(-1)
console.assert(sameTree(buildTree([-1], [-1]), expected2), "Test 2 failed")

// Test 3: preorder=[1,2,3], inorder=[2,1,3] → [1,2,3]
const expected3 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.assert(
  sameTree(buildTree([1, 2, 3], [2, 1, 3]), expected3),
  "Test 3 failed",
)

// Test 4: right-skewed tree; preorder=[1,2,3], inorder=[1,2,3]
const expected4 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))
console.assert(
  sameTree(buildTree([1, 2, 3], [1, 2, 3]), expected4),
  "Test 4 failed",
)

console.log(
  "All tests passed for 105-construct-binary-tree-from-preorder-and-inorder-traversal",
)

