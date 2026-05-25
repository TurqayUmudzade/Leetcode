/**
 * 98. Validate Binary Search Tree
 *
 * Given the root of a binary tree, determine if it is a valid binary search
 * tree (BST). A valid BST satisfies:
 *   - The left subtree of a node contains only nodes with keys strictly less
 *     than the node's key.
 *   - The right subtree of a node contains only nodes with keys strictly
 *     greater than the node's key.
 *   - Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *   Input:  [2, 1, 3]   → true
 *
 * Example 2:
 *   Input:  [5, 1, 4, null, null, 3, 6]   → false  (right child 4 < root 5)
 *
 * Constraints:
 *   - Number of nodes: [1, 10^4]
 *   - -2^31 <= Node.val <= 2^31 - 1
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0
  this.left = left ?? null
  this.right = right ?? null
}

//.   5
//  4   6
//2       8

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function (root, min, max) {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  )
}

// var isValidBST = function (root) {
//   let isValid = true
//   const dfs = (node, min, max) => {
//     if (!node) return

//     if (node.val <= min || node.val >= max) {
//       isValid = false
//       return
//     }

//     dfs(node.left, min, node.val)
//     dfs(node.right, node.val, max)
//   }

//   dfs(root, -Infinity, Infinity)

//   return isValid
// }

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [2,1,3] → true
const t1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.assert(isValidBST(t1) === true, "Test 1 failed")

// Test 2: [5,1,4,null,null,3,6] → false
const t2 = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(3), new TreeNode(6)),
)
console.assert(isValidBST(t2) === false, "Test 2 failed")

// Test 3: tricky case [5,4,6,null,null,3,7] → false (3 < 5 but in right subtree)
const t3 = new TreeNode(
  5,
  new TreeNode(4),
  new TreeNode(6, new TreeNode(3), new TreeNode(7)),
)
console.assert(isValidBST(t3) === false, "Test 3 failed")

// Test 4: single node → true
console.assert(isValidBST(new TreeNode(1)) === true, "Test 4 failed")

console.log("All tests passed for 98-validate-binary-search-tree")

