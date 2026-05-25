/**
 * 1584. Min Cost to Connect All Points
 *
 * You are given an array `points` representing integer coordinates of some points
 * on a 2D plane, where points[i] = [xi, yi].
 *
 * The cost of connecting two points [xi, yi] and [xj, yj] is the Manhattan distance
 * between them: |xi - xj| + |yi - yj|.
 *
 * Return the minimum cost to make all points connected (Minimum Spanning Tree).
 *
 * Approach: Prim's algorithm.
 * - Start from point 0.
 * - Maintain a minCost array representing the cheapest edge to add each node to the MST.
 * - Greedily pick the unvisited node with the smallest cost and update neighbors.
 *
 * Example:
 *   points = [[0,0],[2,2],[3,10],[5,2],[7,0]] → 20
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length;
    if (n === 1) return 0;

    // minCost[i] = cheapest edge weight to connect point i to the MST so far
    const minCost = new Array(n).fill(Infinity);
    const inMST = new Array(n).fill(false);
    minCost[0] = 0;

    let totalCost = 0;

    for (let iter = 0; iter < n; iter++) {
        // Pick the node with minimum cost not yet in MST
        let u = -1;
        for (let i = 0; i < n; i++) {
            if (!inMST[i] && (u === -1 || minCost[i] < minCost[u])) {
                u = i;
            }
        }

        inMST[u] = true;
        totalCost += minCost[u];

        // Update minCost for all unvisited neighbors
        for (let v = 0; v < n; v++) {
            if (inMST[v]) continue;
            const dist = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
            if (dist < minCost[v]) {
                minCost[v] = dist;
            }
        }
    }

    return totalCost;
};

// --- Tests ---
// Example 1: standard 5-point grid
console.assert(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]) === 20, "Test 1 failed");

// Example 2: single point, cost is 0
console.assert(minCostConnectPoints([[0,0]]) === 0, "Test 2 failed");

// Example 3: two points
console.assert(minCostConnectPoints([[0,0],[1,1]]) === 2, "Test 3 failed");

// Example 4: three collinear points on x-axis
console.assert(minCostConnectPoints([[0,0],[3,0],[6,0]]) === 6, "Test 4 failed");

console.log("All tests passed for 1584-min-cost-to-connect-all-points.js");
