/**
 * 100. Same Tree
 *
 * Given the roots of two binary trees p and q, write a function to check if
 * they are the same or not. Two binary trees are considered the same if they
 * are structurally identical, and the nodes have the same value.
 *
 * Example 1:
 *   Input:  p = [1,2,3], q = [1,2,3]
 *   Output: true
 *
 * Example 2:
 *   Input:  p = [1,2], q = [1,null,2]
 *   Output: false
 *
 * Constraints:
 *   - Number of nodes: [0, 100]
 *   - -10^4 <= Node.val <= 10^4
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0
  this.left = left ?? null
  this.right = right ?? null
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val != q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1,2,3] and [1,2,3] → true
const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.assert(isSameTree(p1, q1) === true, "Test 1 failed")

// Test 2: [1,2] and [1,null,2] → false
const p2 = new TreeNode(1, new TreeNode(2), null)
const q2 = new TreeNode(1, null, new TreeNode(2))
console.assert(isSameTree(p2, q2) === false, "Test 2 failed")

// Test 3: [1,2,1] and [1,1,2] → false
const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1))
const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2))
console.assert(isSameTree(p3, q3) === false, "Test 3 failed")

// Test 4: both null → true
console.assert(isSameTree(null, null) === true, "Test 4 failed")

console.log("All tests passed for 100-same-tree")

