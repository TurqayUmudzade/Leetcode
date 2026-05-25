/**
 * 230. Kth Smallest Element in a BST
 *
 * Given the root of a binary search tree and an integer k, return the kth
 * smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 * Example 1:
 *   Input:  root = [3, 1, 4, null, 2], k = 1
 *   Output: 1
 *
 * Example 2:
 *   Input:  root = [5, 3, 6, 2, 4, null, null, 1], k = 3
 *   Output: 3
 *
 * Constraints:
 *   - Number of nodes: [1, 10^4]
 *   - 0 <= Node.val <= 10^4
 *   - 1 <= k <= number of nodes
 */

function TreeNode(val, left, right) {
  this.val = val ?? 0;
  this.left = left ?? null;
  this.right = right ?? null;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {};

// ─── Tests ────────────────────────────────────────────────────────────────────

// Test 1: [3,1,4,null,2], k=1 → 1
const t1 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.assert(kthSmallest(t1, 1) === 1, "Test 1 failed");

// Test 2: [5,3,6,2,4,null,null,1], k=3 → 3
const t2 = new TreeNode(5,
  new TreeNode(3,
    new TreeNode(2, new TreeNode(1), null),
    new TreeNode(4)
  ),
  new TreeNode(6)
);
console.assert(kthSmallest(t2, 3) === 3, "Test 2 failed");

// Test 3: [3,1,4,null,2], k=3 → 3
console.assert(kthSmallest(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), 3) === 3, "Test 3 failed");

// Test 4: single node, k=1 → that node's value
console.assert(kthSmallest(new TreeNode(7), 1) === 7, "Test 4 failed");

console.log("All tests passed for 230-kth-smallest-element-in-a-bst");
