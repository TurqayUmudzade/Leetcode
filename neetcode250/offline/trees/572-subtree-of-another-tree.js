/**
 * 572. Subtree of Another Tree
 *
 * Given the roots of two binary trees root and subRoot, return true if there
 * is a subtree of root with the same structure and node values as subRoot,
 * and false otherwise. A subtree of a binary tree is a tree consisting of a
 * node in that tree and all of this node's descendants.
 *
 * Example 1:
 *   Input:  root = [3,4,5,1,2], subRoot = [4,1,2]
 *   Output: true
 *
 * Example 2:
 *   Input:  root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 *   Output: false
 *
 * Constraints:
 *   - root nodes: [1, 2000], subRoot nodes: [1, 1000]
 *   - -10^4 <= Node.val <= 10^4
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: root=[3,4,5,1,2], subRoot=[4,1,2] → true
const root1 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5)
);
const sub1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.assert(isSubtree(root1, sub1) === true, "Test 1 failed");

// Test 2: root=[3,4,5,1,2,null,null,null,null,0], subRoot=[4,1,2] → false
const root2 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0), null)),
  new TreeNode(5)
);
const sub2 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.assert(isSubtree(root2, sub2) === false, "Test 2 failed");

// Test 3: identical trees → true
const root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const sub3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.assert(isSubtree(root3, sub3) === true, "Test 3 failed");

// Test 4: subRoot is a single leaf → true
const root4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const sub4 = new TreeNode(3);
console.assert(isSubtree(root4, sub4) === true, "Test 4 failed");

console.log("All tests passed for 572-subtree-of-another-tree");
