/**
 * 543. Diameter of Binary Tree
 *
 * Given the root of a binary tree, return the length of the diameter of the
 * tree. The diameter is the length of the longest path between any two nodes.
 * This path may or may not pass through the root.
 * The length of a path between two nodes is the number of edges between them.
 *
 * Example:
 *   Input:  [1, 2, 3, 4, 5]
 *   Output: 3   (path: 4→2→1→3  or  5→2→1→3)
 *
 * Constraints:
 *   - Number of nodes: [1, 10^4]
 *   - -100 <= Node.val <= 100
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1,2,3,4,5] → 3
const t1 = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.assert(diameterOfBinaryTree(t1) === 3, "Test 1 failed");

// Test 2: single node → 0
console.assert(diameterOfBinaryTree(new TreeNode(1)) === 0, "Test 2 failed");

// Test 3: [1,2] → 1
const t3 = new TreeNode(1, new TreeNode(2));
console.assert(diameterOfBinaryTree(t3) === 1, "Test 3 failed");

// Test 4: linear chain [1,2,3] (skewed left) → 2
const t4 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
console.assert(diameterOfBinaryTree(t4) === 2, "Test 4 failed");

console.log("All tests passed for 543-diameter-of-binary-tree");
