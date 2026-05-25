/**
 * 145. Binary Tree Postorder Traversal
 *
 * Given the root of a binary tree, return the postorder traversal of its
 * nodes' values (left → right → root).
 *
 * Example:
 *   Input:  [1, null, 2, 3]   (root=1, right=2, right.left=3)
 *   Output: [3, 2, 1]
 *
 * Constraints:
 *   - Number of nodes: [0, 100]
 *   - -100 <= Node.val <= 100
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1, null, 2, 3] → [3, 2, 1]
const t1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.assert(JSON.stringify(postorderTraversal(t1)) === JSON.stringify([3, 2, 1]), "Test 1 failed");

// Test 2: empty tree → []
console.assert(JSON.stringify(postorderTraversal(null)) === JSON.stringify([]), "Test 2 failed");

// Test 3: single node [1] → [1]
console.assert(JSON.stringify(postorderTraversal(new TreeNode(1))) === JSON.stringify([1]), "Test 3 failed");

// Test 4: [1, 2, 3] → [2, 3, 1]
const t4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.assert(JSON.stringify(postorderTraversal(t4)) === JSON.stringify([2, 3, 1]), "Test 4 failed");

console.log("All tests passed for 145-binary-tree-postorder-traversal");
