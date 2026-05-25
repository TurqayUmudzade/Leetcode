/**
 * 261. Graph Valid Tree
 *
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n
 * and a list of edges where edges[i] = [ai, bi] indicates that there is an
 * undirected edge between nodes ai and bi in the graph.
 *
 * Return true if the edges of the given graph make up a valid tree, and false
 * otherwise.
 *
 * A valid tree must:
 *   - Be fully connected (all nodes reachable from any node)
 *   - Contain no cycles
 *   - Have exactly n - 1 edges
 *
 * Example 1:
 *   n = 5, edges = [[0,1],[0,2],[0,3],[1,4]] => true
 *
 * Example 2:
 *   n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]] => false
 *   (contains cycle)
 *
 * Constraints:
 *   - 1 <= n <= 2000
 *   - 0 <= edges.length <= 5000
 *   - edges[i].length == 2
 *   - 0 <= ai, bi < n
 *   - ai != bi
 *   - There are no self-loops or repeated edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {

};

// Tests
console.assert(
  validTree(5, [[0,1],[0,2],[0,3],[1,4]]) === true,
  'Test 1 failed: expected true'
);

console.assert(
  validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]]) === false,
  'Test 2 failed: expected false (cycle)'
);

console.assert(
  validTree(1, []) === true,
  'Test 3 failed: single node is a valid tree'
);

console.assert(
  validTree(4, [[0,1],[2,3]]) === false,
  'Test 4 failed: disconnected graph is not a valid tree'
);

console.log('All tests passed for 261-graph-valid-tree');
