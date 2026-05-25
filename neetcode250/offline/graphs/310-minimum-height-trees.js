/**
 * 310. Minimum Height Trees
 *
 * A tree is an undirected graph in which any two vertices are connected by
 * exactly one path. In other words, any connected graph without simple cycles
 * is a tree.
 *
 * Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1
 * edges where edges[i] = [ai, bi] indicates that there is an undirected edge
 * between nodes ai and bi in the tree, you can choose any node of the tree as
 * the root. When you select a node x as the root, the result tree has height h.
 *
 * Among all possible rooted trees, those with minimum height are called minimum
 * height trees (MHTs). Return a list of all MHTs' root labels in any order.
 *
 * The height of a rooted tree is the number of edges on the longest downward
 * path between the root and a leaf.
 *
 * Example 1:
 *   n = 4, edges = [[1,0],[1,2],[1,3]] => [1]
 *
 * Example 2:
 *   n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]] => [3,4]
 *
 * Constraints:
 *   - 1 <= n <= 2 * 10^4
 *   - edges.length == n - 1
 *   - 0 <= ai, bi < n
 *   - ai != bi
 *   - All the pairs (ai, bi) are distinct.
 *   - The given input is guaranteed to be a tree and there will be no repeated edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {

};

// Helper: safely sort result
function sortedResult(r) { return r ? r.slice().sort((a,b)=>a-b) : null; }

// Tests
console.assert(
  JSON.stringify(sortedResult(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]))) === JSON.stringify([1]),
  'Test 1 failed: expected [1]'
);

console.assert(
  JSON.stringify(sortedResult(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]))) === JSON.stringify([3,4]),
  'Test 2 failed: expected [3,4]'
);

console.assert(
  JSON.stringify(sortedResult(findMinHeightTrees(1, []))) === JSON.stringify([0]),
  'Test 3 failed: single node expected [0]'
);

console.assert(
  JSON.stringify(sortedResult(findMinHeightTrees(2, [[0,1]]))) === JSON.stringify([0,1]),
  'Test 4 failed: two nodes expected [0,1]'
);

console.log('All tests passed for 310-minimum-height-trees');
