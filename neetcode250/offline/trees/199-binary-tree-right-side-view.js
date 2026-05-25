/**
 * 199. Binary Tree Right Side View
 *
 * Given the root of a binary tree, imagine yourself standing on the right
 * side of it. Return the values of the nodes you can see ordered from top
 * to bottom (i.e., the last node at each level).
 *
 * Example:
 *   Input:  [1, 2, 3, null, 5, null, 4]
 *   Output: [1, 3, 4]
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
var rightSideView = function(root) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1,2,3,null,5,null,4] → [1,3,4]
const t1 = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4))
);
console.assert(JSON.stringify(rightSideView(t1)) === JSON.stringify([1, 3, 4]), "Test 1 failed");

// Test 2: null → []
console.assert(JSON.stringify(rightSideView(null)) === JSON.stringify([]), "Test 2 failed");

// Test 3: single node → [1]
console.assert(JSON.stringify(rightSideView(new TreeNode(1))) === JSON.stringify([1]), "Test 3 failed");

// Test 4: left-skewed [1,2,null,3] → [1,2,3]
const t4 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
console.assert(JSON.stringify(rightSideView(t4)) === JSON.stringify([1, 2, 3]), "Test 4 failed");

console.log("All tests passed for 199-binary-tree-right-side-view");
