/**
 * 297. Serialize and Deserialize Binary Tree
 *
 * Serialization is the process of converting a data structure or object into
 * a sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network. The structure can be reconstructed later in
 * the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and
 * this string can be deserialized to the original tree structure.
 *
 * Example:
 *   Input:  root = [1, 2, 3, null, null, 4, 5]
 *   Output: [1, 2, 3, null, null, 4, 5]  (same tree after round-trip)
 *
 * Constraints:
 *   - Number of nodes: [0, 10^4]
 *   - -1000 <= Node.val <= 1000
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
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {};

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [1,2,3,null,null,4,5] round-trip
const t1 = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);
console.assert(sameTree(deserialize(serialize(t1)), t1), "Test 1 failed");

// Test 2: null round-trip
console.assert(deserialize(serialize(null)) === null, "Test 2 failed");

// Test 3: single node round-trip
const t3 = new TreeNode(42);
console.assert(sameTree(deserialize(serialize(t3)), t3), "Test 3 failed");

// Test 4: deeper tree with negative values
const t4 = new TreeNode(-1,
  new TreeNode(-2, new TreeNode(-3), null),
  new TreeNode(4)
);
console.assert(sameTree(deserialize(serialize(t4)), t4), "Test 4 failed");

console.log("All tests passed for 297-serialize-and-deserialize-binary-tree");
