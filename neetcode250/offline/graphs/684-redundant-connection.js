/**
 * 684. Redundant Connection
 *
 * In this problem, a tree is an undirected graph that is connected and has no cycles.
 *
 * You are given a graph that started as a tree with n nodes labeled from 1 to n,
 * with one additional edge added. The added edge has two different vertices chosen
 * from 1 to n, and was not an edge that already existed. The graph is represented
 * as an array edges of length n where edges[i] = [ai, bi] indicates that there is
 * an edge between nodes ai and bi in the graph.
 *
 * Return an edge that can be removed so that the resulting graph is a tree of n
 * nodes. If there are multiple answers, return the answer that occurs last in the
 * input.
 *
 * Example 1:
 *   edges = [[1,2],[1,3],[2,3]] => [2,3]
 *
 * Example 2:
 *   edges = [[1,2],[2,3],[3,4],[1,4],[1,5]] => [1,4]
 *
 * Constraints:
 *   - n == edges.length
 *   - 3 <= n <= 1000
 *   - edges[i].length == 2
 *   - 1 <= ai, bi <= n
 *   - ai != bi
 *   - There are no repeated edges.
 *   - The given graph is connected.
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {

};

// Tests
console.assert(
  JSON.stringify(findRedundantConnection([[1,2],[1,3],[2,3]])) === JSON.stringify([2,3]),
  'Test 1 failed: expected [2,3]'
);

console.assert(
  JSON.stringify(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])) === JSON.stringify([1,4]),
  'Test 2 failed: expected [1,4]'
);

console.assert(
  JSON.stringify(findRedundantConnection([[1,2],[2,3],[1,3]])) === JSON.stringify([1,3]),
  'Test 3 failed: expected [1,3]'
);

console.assert(
  JSON.stringify(findRedundantConnection([[3,4],[1,2],[2,4],[3,5],[2,5]])) === JSON.stringify([2,5]),
  'Test 4 failed: expected [2,5]'
);

console.log('All tests passed for 684-redundant-connection');
