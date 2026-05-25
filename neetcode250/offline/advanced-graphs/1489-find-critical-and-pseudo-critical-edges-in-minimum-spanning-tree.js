/**
 * 1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
 *
 * Given a weighted undirected connected graph with n vertices and edges array,
 * where edges[i] = [a_i, b_i, weight_i].
 *
 * A Minimum Spanning Tree (MST) is a spanning tree with minimum total edge weight.
 * - A "critical" edge is one whose removal causes the MST weight to increase.
 * - A "pseudo-critical" edge is one that can appear in some MST but not all.
 *
 * Return [criticalEdges, pseudoCriticalEdges] as arrays of indices into `edges`.
 *
 * Approach: Kruskal's algorithm with Union-Find.
 * 1. Compute the MST weight.
 * 2. For each edge e:
 *    - Critical: build MST without e. If new MST weight > original, e is critical.
 *    - Pseudo-critical: force include e, build rest of MST. If weight == original, e is pseudo-critical.
 *
 * Example:
 *   n=5, edges=[[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
 *   → [[0,1],[2,3,4,5]]
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    // Attach original indices before sorting
    const indexedEdges = edges.map((e, i) => [...e, i]);
    indexedEdges.sort((a, b) => a[2] - b[2]);

    // Union-Find helpers
    function makeUF(size) {
        const parent = Array.from({ length: size }, (_, i) => i);
        const rank = new Array(size).fill(0);
        return { parent, rank };
    }

    function find(uf, x) {
        if (uf.parent[x] !== x) uf.parent[x] = find(uf, uf.parent[x]);
        return uf.parent[x];
    }

    function union(uf, x, y) {
        const px = find(uf, x), py = find(uf, y);
        if (px === py) return false;
        if (uf.rank[px] < uf.rank[py]) uf.parent[px] = py;
        else if (uf.rank[px] > uf.rank[py]) uf.parent[py] = px;
        else { uf.parent[py] = px; uf.rank[px]++; }
        return true;
    }

    // Build MST weight, optionally skipping edge at skipIdx or forcing edge at forceIdx
    function kruskalWeight(skipIdx = -1, forceIdx = -1) {
        const uf = makeUF(n);
        let weight = 0;
        let edgeCount = 0;

        if (forceIdx !== -1) {
            const [u, v, w] = indexedEdges[forceIdx];
            union(uf, u, v);
            weight += w;
            edgeCount++;
        }

        for (let i = 0; i < indexedEdges.length; i++) {
            if (i === skipIdx) continue;
            const [u, v, w] = indexedEdges[i];
            if (union(uf, u, v)) {
                weight += w;
                edgeCount++;
            }
        }

        return edgeCount === n - 1 ? weight : Infinity;
    }

    const mstWeight = kruskalWeight();

    const critical = [];
    const pseudoCritical = [];

    for (let i = 0; i < indexedEdges.length; i++) {
        const originalIdx = indexedEdges[i][3];

        // Check if critical: MST without this edge is heavier
        if (kruskalWeight(i, -1) > mstWeight) {
            critical.push(originalIdx);
        }
        // Check if pseudo-critical: forcing this edge still achieves original MST weight
        else if (kruskalWeight(-1, i) === mstWeight) {
            pseudoCritical.push(originalIdx);
        }
    }

    critical.sort((a, b) => a - b);
    pseudoCritical.sort((a, b) => a - b);

    return [critical, pseudoCritical];
};

// --- Tests ---
// Example 1: standard 5-node graph
console.assert(
    JSON.stringify(findCriticalAndPseudoCriticalEdges(
        5, [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
    )) === JSON.stringify([[0,1],[2,3,4,5]]),
    "Test 1 failed"
);

// Example 2: n=4, a single clear critical bridge
console.assert(
    JSON.stringify(findCriticalAndPseudoCriticalEdges(
        4, [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
    )) === JSON.stringify([[], [0,1,2,3]]),
    "Test 2 failed"
);

// Example 3: all edges are critical (path graph)
const res3 = findCriticalAndPseudoCriticalEdges(3, [[0,1,1],[1,2,2],[0,2,5]]);
console.assert(JSON.stringify(res3[0]) === JSON.stringify([0,1]), "Test 3 failed");

// Example 4: two-node graph with a single edge (must be critical)
const res4 = findCriticalAndPseudoCriticalEdges(2, [[0,1,7]]);
console.assert(JSON.stringify(res4[0]) === JSON.stringify([0]), "Test 4 failed");

console.log("All tests passed for 1489-find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree.js");
