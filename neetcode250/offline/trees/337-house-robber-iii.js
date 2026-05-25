/**
 * 337. House Robber III
 *
 * The thief has found himself a new place for his thievery again. There is
 * only one entrance to this area, called root. The houses are arranged in a
 * binary tree. The thief can rob at most a house at each node, but cannot rob
 * two directly-linked houses (parent and child) on the same night.
 * Return the maximum amount of money the thief can rob without alerting the
 * police.
 *
 * Example 1:
 *   Input:  [3, 2, 3, null, 3, null, 1]
 *   Output: 7   (rob root 3 + left.right 3 + right.right 1)
 *
 * Example 2:
 *   Input:  [3, 4, 5, 1, 3, null, 1]
 *   Output: 9   (rob left 4 + right 5)
 *
 * Constraints:
 *   - Number of nodes: [1, 10^4]
 *   - 0 <= Node.val <= 10^4
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
var rob = function(root) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [3,2,3,null,3,null,1] → 7
const t1 = new TreeNode(3,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(3, null, new TreeNode(1))
);
console.assert(rob(t1) === 7, "Test 1 failed");

// Test 2: [3,4,5,1,3,null,1] → 9
const t2 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(3)),
  new TreeNode(5, null, new TreeNode(1))
);
console.assert(rob(t2) === 9, "Test 2 failed");

// Test 3: single node → node's value
console.assert(rob(new TreeNode(5)) === 5, "Test 3 failed");

// Test 4: two nodes [1,2] → 2 (rob child instead of parent)
const t4 = new TreeNode(1, new TreeNode(2));
console.assert(rob(t4) === 2, "Test 4 failed");

console.log("All tests passed for 337-house-robber-iii");
