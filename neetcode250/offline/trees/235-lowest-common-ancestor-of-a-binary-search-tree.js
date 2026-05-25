/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA)
 * of two given nodes p and q. The LCA is defined as the lowest node in the
 * tree that has both p and q as descendants (a node is a descendant of itself).
 *
 * Example 1:
 *   Input:  BST = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 *   Output: 6
 *
 * Example 2:
 *   Input:  BST = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 *   Output: 2
 *
 * Constraints:
 *   - Number of nodes: [2, 10^5]
 *   - -10^9 <= Node.val <= 10^9
 *   - All Node.val are unique
 *   - p !== q, and both p and q exist in the tree
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Build BST: [6,2,8,0,4,7,9,null,null,3,5]
const n0  = new TreeNode(0);
const n3  = new TreeNode(3);
const n5  = new TreeNode(5);
const n4  = new TreeNode(4, n3, n5);
const n2  = new TreeNode(2, n0, n4);
const n7  = new TreeNode(7);
const n9  = new TreeNode(9);
const n8  = new TreeNode(8, n7, n9);
const bst = new TreeNode(6, n2, n8);

// Test 1: p=2, q=8 → LCA.val = 6
console.assert(lowestCommonAncestor(bst, n2, n8).val === 6, "Test 1 failed");

// Test 2: p=2, q=4 → LCA.val = 2
console.assert(lowestCommonAncestor(bst, n2, n4).val === 2, "Test 2 failed");

// Test 3: p=0, q=5 → LCA.val = 2
console.assert(lowestCommonAncestor(bst, n0, n5).val === 2, "Test 3 failed");

// Test 4: p=7, q=9 → LCA.val = 8
console.assert(lowestCommonAncestor(bst, n7, n9).val === 8, "Test 4 failed");

console.log("All tests passed for 235-lowest-common-ancestor-of-a-binary-search-tree");
