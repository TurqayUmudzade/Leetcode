/**
 * 450. Delete Node in a BST
 *
 * Given a root of a BST and a key, delete the node with the given key in the
 * BST. Return the root of the (possibly updated) BST. There are three cases:
 *   1. Node is a leaf → remove it directly.
 *   2. Node has one child → replace node with its child.
 *   3. Node has two children → replace node's value with inorder successor
 *      (smallest in right subtree) then delete that successor.
 *
 * Example:
 *   Input:  root = [5,3,6,2,4,null,7], key = 3
 *   Output: valid BST without 3 (e.g. [5,4,6,2,null,null,7])
 *
 * Constraints:
 *   - Number of nodes: [0, 10^4]
 *   - -10^5 <= Node.val <= 10^5
 *   - All values are unique
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

function inorder(root, res = []) {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
  return res;
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: delete 3 from [5,3,6,2,4,null,7] → inorder [2,4,5,6,7]
const t1 = new TreeNode(5,
  new TreeNode(3, new TreeNode(2), new TreeNode(4)),
  new TreeNode(6, null, new TreeNode(7))
);
const r1 = deleteNode(t1, 3);
console.assert(JSON.stringify(inorder(r1)) === JSON.stringify([2, 4, 5, 6, 7]), "Test 1 failed");

// Test 2: delete 0 (key not in tree) → inorder unchanged
const t2 = new TreeNode(5, new TreeNode(3), new TreeNode(6));
const r2 = deleteNode(t2, 0);
console.assert(JSON.stringify(inorder(r2)) === JSON.stringify([3, 5, 6]), "Test 2 failed");

// Test 3: delete leaf node
const t3 = new TreeNode(5, new TreeNode(3), new TreeNode(6));
const r3 = deleteNode(t3, 6);
console.assert(JSON.stringify(inorder(r3)) === JSON.stringify([3, 5]), "Test 3 failed");

// Test 4: delete root with two children
const t4 = new TreeNode(5, new TreeNode(3), new TreeNode(7));
const r4 = deleteNode(t4, 5);
console.assert(JSON.stringify(inorder(r4)) === JSON.stringify([3, 7]), "Test 4 failed");

console.log("All tests passed for 450-delete-node-in-a-bst");
