/**
 * 323. Number of Connected Components in an Undirected Graph
 *
 * You have a graph of n nodes. You are given an integer n and an array edges
 * where edges[i] = [ai, bi] indicates that there is an edge between ai and bi
 * in the graph.
 *
 * Return the number of connected components in the graph.
 *
 * Example 1:
 *   n = 5, edges = [[0,1],[1,2],[3,4]] => 2
 *   (Components: {0,1,2} and {3,4})
 *
 * Example 2:
 *   n = 5, edges = [[0,1],[1,2],[2,3],[3,4]] => 1
 *   (All nodes connected)
 *
 * Constraints:
 *   - 1 <= n <= 2000
 *   - 1 <= edges.length <= 5000
 *   - edges[i].length == 2
 *   - 0 <= ai, bi < n
 *   - ai != bi
 *   - There are no repeated edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {

};

// Tests
console.assert(
  countComponents(5, [[0,1],[1,2],[3,4]]) === 2,
  'Test 1 failed: expected 2'
);

console.assert(
  countComponents(5, [[0,1],[1,2],[2,3],[3,4]]) === 1,
  'Test 2 failed: expected 1'
);

console.assert(
  countComponents(3, []) === 3,
  'Test 3 failed: no edges means 3 isolated nodes, expected 3'
);

console.assert(
  countComponents(4, [[0,1],[2,3]]) === 2,
  'Test 4 failed: expected 2'
);

console.log('All tests passed for 323-number-of-connected-components-in-an-undirected-graph');
