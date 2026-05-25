/**
 * 133. Clone Graph
 *
 * Given a reference of a node in a connected undirected graph, return a deep copy
 * (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its
 * neighbors.
 *
 *   class Node {
 *     public int val;
 *     public List<Node> neighbors;
 *   }
 *
 * Test case format:
 * For simplicity, each node's value is the same as the node's index (1-indexed).
 * The graph is represented in the input as an adjacency list.
 * adjacencyList[i] is the list of nodes adjacent to node (i+1).
 *
 * Example 1:
 *   adjList = [[2,4],[1,3],[2,4],[1,3]] => deep copy of same structure
 *   (Node 1 connects to 2 and 4, node 2 connects to 1 and 3, etc.)
 *
 * Example 2:
 *   adjList = [[]] => single node with no neighbors
 *
 * Example 3:
 *   adjList = [] => null input
 *
 * Constraints:
 *   - The number of nodes in the graph is in the range [0, 100].
 *   - 1 <= Node.val <= 100
 *   - Node.val is unique for each node.
 *   - There are no repeated edges and no self-loops in the graph.
 *   - The graph is connected and all nodes can be visited starting from the given node.
 */

function Node(val, neighbors) {
  this.val = val;
  this.neighbors = neighbors || [];
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

};

// Helper: build graph from adjacency list (1-indexed)
function buildGraph(adjList) {
  if (!adjList || adjList.length === 0) return null;
  const nodes = adjList.map((_, i) => new Node(i + 1));
  adjList.forEach((neighbors, i) => {
    nodes[i].neighbors = neighbors.map(v => nodes[v - 1]);
  });
  return nodes[0];
}

// Helper: serialize graph to adjacency list for comparison
function serializeGraph(node) {
  if (!node) return [];
  const visited = new Map();
  const result = [];
  const queue = [node];
  visited.set(node.val, node);
  while (queue.length > 0) {
    const cur = queue.shift();
    result[cur.val - 1] = cur.neighbors.map(n => n.val).sort((a, b) => a - b);
    for (const nb of cur.neighbors) {
      if (!visited.has(nb.val)) {
        visited.set(nb.val, nb);
        queue.push(nb);
      }
    }
  }
  return result;
}

// Test 1: standard 4-node cycle graph
const g1 = buildGraph([[2,4],[1,3],[2,4],[1,3]]);
const clone1 = cloneGraph(g1);
console.assert(
  clone1 !== g1,
  'Test 1 failed: clone should be a different object'
);
console.assert(
  clone1 != null && JSON.stringify(serializeGraph(clone1)) === JSON.stringify([[2,4],[1,3],[2,4],[1,3]]),
  'Test 1 failed: clone structure does not match'
);

// Test 2: single node no neighbors
const g2 = buildGraph([[]]);
const clone2 = cloneGraph(g2);
console.assert(
  clone2 != null && clone2.val === 1 && clone2.neighbors.length === 0,
  'Test 2 failed: expected single node with val=1 and no neighbors'
);

// Test 3: null input
console.assert(
  cloneGraph(null) === null,
  'Test 3 failed: expected null for null input'
);

// Test 4: two connected nodes
const g4 = buildGraph([[2],[1]]);
const clone4 = cloneGraph(g4);
console.assert(
  clone4 != null && clone4.val === 1 && clone4.neighbors.length === 1 && clone4.neighbors[0].val === 2,
  'Test 4 failed: expected node 1 connected to node 2'
);

console.log('All tests passed for 133-clone-graph');
