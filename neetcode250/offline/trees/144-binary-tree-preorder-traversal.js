/**
 * 144. Binary Tree Preorder Traversal
 *
 * Given the root of a binary tree, return the preorder traversal of its
 * nodes' values (root → left → right).
 *
 * Example:
 *   Input:  [1, null, 2, 3]   (root=1, right=2, right.left=3)
 *   Output: [1, 2, 3]
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
var preorderTraversal = function(root) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1, null, 2, 3] → [1, 2, 3]
const t1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.assert(JSON.stringify(preorderTraversal(t1)) === JSON.stringify([1, 2, 3]), "Test 1 failed");

// Test 2: empty tree → []
console.assert(JSON.stringify(preorderTraversal(null)) === JSON.stringify([]), "Test 2 failed");

// Test 3: single node [1] → [1]
console.assert(JSON.stringify(preorderTraversal(new TreeNode(1))) === JSON.stringify([1]), "Test 3 failed");

// Test 4: [1, 2, 3] → [1, 2, 3]
const t4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.assert(JSON.stringify(preorderTraversal(t4)) === JSON.stringify([1, 2, 3]), "Test 4 failed");

console.log("All tests passed for 144-binary-tree-preorder-traversal");
