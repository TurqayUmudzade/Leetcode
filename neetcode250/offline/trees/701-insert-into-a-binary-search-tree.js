/**
 * 701. Insert into a Binary Search Tree
 *
 * Given the root of a BST and a value to insert, insert the value into the
 * BST. Return the root node of the BST after the insertion. It is guaranteed
 * that the new value does not exist in the original BST.
 * There may exist multiple valid ways to perform the insertion; any of them
 * is acceptable as long as the resulting tree is still a valid BST.
 *
 * Example:
 *   Input:  root = [4,2,7,1,3], val = 5
 *   Output: [4,2,7,1,3,5]
 *
 * Constraints:
 *   - Number of nodes: [0, 10^4]
 *   - -10^8 <= Node.val <= 10^8
 *   - All values are unique
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

/** Collect inorder values to validate BST property */
function inorder(root, res = []) {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
  return res;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: insert 5 into [4,2,7,1,3] → inorder should be [1,2,3,4,5,7]
const t1 = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7)
);
const r1 = insertIntoBST(t1, 5);
console.assert(JSON.stringify(inorder(r1)) === JSON.stringify([1, 2, 3, 4, 5, 7]), "Test 1 failed");

// Test 2: insert into empty tree → single node
const r2 = insertIntoBST(null, 10);
console.assert(r2 !== null && r2.val === 10, "Test 2 failed");

// Test 3: insert smaller value → stays a valid BST
const t3 = new TreeNode(5, new TreeNode(3), new TreeNode(7));
const r3 = insertIntoBST(t3, 1);
const io3 = inorder(r3);
console.assert(JSON.stringify(io3) === JSON.stringify([1, 3, 5, 7]), "Test 3 failed");

// Test 4: insert larger value → stays a valid BST
const t4 = new TreeNode(5, new TreeNode(3), new TreeNode(7));
const r4 = insertIntoBST(t4, 9);
const io4 = inorder(r4);
console.assert(JSON.stringify(io4) === JSON.stringify([3, 5, 7, 9]), "Test 4 failed");

console.log("All tests passed for 701-insert-into-a-binary-search-tree");
