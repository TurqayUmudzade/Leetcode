/**
 * 743. Network Delay Time
 *
 * You are given a network of `n` nodes labeled 1 to n. You are also given `times`,
 * a list of travel times as directed edges times[i] = [u, v, w], where u is the
 * source node, v is the target node, and w is the time it takes for a signal to
 * travel from source to target.
 *
 * A signal is sent from a given node `k`. Return the minimum time it takes for all
 * the n nodes to receive the signal. If it is impossible for all n nodes to receive
 * the signal, return -1.
 *
 * Approach: Dijkstra's algorithm from node k. The answer is the maximum shortest
 * distance across all nodes. If any node is unreachable, return -1.
 *
 * Example:
 *   times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2 → 2
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // Build adjacency list (1-indexed)
    const graph = new Map();
    for (let i = 1; i <= n; i++) graph.set(i, []);
    for (const [u, v, w] of times) {
        graph.get(u).push([v, w]);
    }

    // dist[node] = shortest time to reach node from k
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    // Min-heap: [cost, node]
    const heap = [[0, k]];

    while (heap.length > 0) {
        heap.sort((a, b) => a[0] - b[0]);
        const [cost, node] = heap.shift();

        if (cost > dist[node]) continue;

        for (const [neighbor, weight] of graph.get(node)) {
            const newCost = cost + weight;
            if (newCost < dist[neighbor]) {
                dist[neighbor] = newCost;
                heap.push([newCost, neighbor]);
            }
        }
    }

    let maxDist = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        maxDist = Math.max(maxDist, dist[i]);
    }
    return maxDist;
};

// --- Tests ---
// Example 1: standard 4-node network
console.assert(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) === 2, "Test 1 failed");

// Example 2: single node
console.assert(networkDelayTime([], 1, 1) === 0, "Test 2 failed");

// Example 3: unreachable node, should return -1
console.assert(networkDelayTime([[1,2,1]], 2, 2) === -1, "Test 3 failed");

// Example 4: multiple paths, Dijkstra picks shortest
console.assert(networkDelayTime([[1,2,1],[2,3,2],[1,3,4]], 3, 1) === 3, "Test 4 failed");

console.log("All tests passed for 743-network-delay-time.js");
