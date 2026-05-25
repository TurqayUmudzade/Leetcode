/**
 * 1448. Count Good Nodes in Binary Tree
 *
 * Given a binary tree root, a node X in the tree is named "good" if in the
 * path from the root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 *
 * Example 1:
 *   Input:  [3, 1, 4, 3, null, 1, 5]
 *   Output: 4   (good nodes: root 3, left-right 3, right 4, right-right 5)
 *
 * Example 2:
 *   Input:  [3, 3, null, 4, 2]
 *   Output: 3
 *
 * Constraints:
 *   - Number of nodes: [1, 10^5]
 *   - -10^4 <= Node.val <= 10^4
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
var goodNodes = function(root) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [3,1,4,3,null,1,5] → 4
const t1 = new TreeNode(3,
  new TreeNode(1, new TreeNode(3), null),
  new TreeNode(4, new TreeNode(1), new TreeNode(5))
);
console.assert(goodNodes(t1) === 4, "Test 1 failed");

// Test 2: [3,3,null,4,2] → 3
const t2 = new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2)));
console.assert(goodNodes(t2) === 3, "Test 2 failed");

// Test 3: single node → 1 (root is always good)
console.assert(goodNodes(new TreeNode(1)) === 1, "Test 3 failed");

// Test 4: strictly decreasing path [5,4,3,2] → only root is good
const t4 = new TreeNode(5, new TreeNode(4, new TreeNode(3, new TreeNode(2))));
console.assert(goodNodes(t4) === 1, "Test 4 failed");

console.log("All tests passed for 1448-count-good-nodes-in-binary-tree");
