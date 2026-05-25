/**
 * 1325. Delete Leaves With a Given Value
 *
 * Given a binary tree root and an integer target, delete all the leaf nodes
 * with value equal to target. Note that once you delete a leaf node with the
 * target value, it may expose another node as a leaf — you must keep deleting
 * until no leaf with the target value exists.
 *
 * Example 1:
 *   Input:  root = [1, 2, 3, 2, null, 2, 4], target = 2
 *   Output: [1, null, 3, null, 4]
 *
 * Example 2:
 *   Input:  root = [1, 3, 3, 3, 2], target = 3
 *   Output: [1, 3, null, null, 2]
 *
 * Constraints:
 *   - Number of nodes: [1, 3000]
 *   - 1 <= Node.val, target <= 1000
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

function sameTree(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.val === b.val && sameTree(a.left, b.left) && sameTree(a.right, b.right);
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1,2,3,2,null,2,4], target=2 → [1,null,3,null,4]
const t1 = new TreeNode(1,
  new TreeNode(2, new TreeNode(2), null),
  new TreeNode(3, new TreeNode(2), new TreeNode(4))
);
const expected1 = new TreeNode(1, null, new TreeNode(3, null, new TreeNode(4)));
console.assert(sameTree(removeLeafNodes(t1, 2), expected1), "Test 1 failed");

// Test 2: [1,3,3,3,2], target=3 → [1,3,null,null,2]
const t2 = new TreeNode(1,
  new TreeNode(3, new TreeNode(3), new TreeNode(2)),
  new TreeNode(3)
);
const expected2 = new TreeNode(1, new TreeNode(3, null, new TreeNode(2)), null);
console.assert(sameTree(removeLeafNodes(t2, 3), expected2), "Test 2 failed");

// Test 3: root is itself a leaf with target value → null
const t3 = new TreeNode(1);
console.assert(removeLeafNodes(t3, 1) === null, "Test 3 failed");

// Test 4: no leaves match target → tree unchanged
const t4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.assert(sameTree(removeLeafNodes(t4, 5), t4), "Test 4 failed");

console.log("All tests passed for 1325-delete-leaves-with-a-given-value");
