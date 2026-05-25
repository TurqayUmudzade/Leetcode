/**
 * 2392. Build a Matrix With Conditions
 *
 * You are given a positive integer k and two 2D integer arrays rowConditions and
 * colConditions, each of size m and n respectively.
 *
 * Both arrays contain integers in the range [1, k] inclusive. rowConditions[i] = [above_i, below_i]
 * means the number above_i must appear in a row that is strictly above the row of below_i.
 * colConditions[i] = [left_i, right_i] means left_i must appear in a column strictly
 * left of the column of right_i.
 *
 * Build a k×k matrix that contains each of the numbers from 1 to k exactly once, with
 * the rest filled with 0s, satisfying both sets of conditions.
 *
 * Return any valid matrix, or an empty array if it is impossible.
 *
 * Approach: Topological Sort (DFS-based) on row and column conditions independently.
 * Place number i at matrix[rowOrder[i]][colOrder[i]].
 *
 * Example:
 *   k=3, rowConditions=[[1,2],[3,2]], colConditions=[[2,1],[3,2]]
 *   → [[3,0,0],[0,0,1],[0,2,0]] (any valid answer is accepted)
 */

/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    // Topological sort using DFS; returns ordering or null if cycle detected
    function topoSort(conditions) {
        const graph = new Map();
        for (let i = 1; i <= k; i++) graph.set(i, []);
        for (const [u, v] of conditions) {
            graph.get(u).push(v);
        }

        const order = [];
        // 0 = unvisited, 1 = in stack (gray), 2 = done (black)
        const state = new Array(k + 1).fill(0);

        function dfs(node) {
            if (state[node] === 1) return false; // cycle
            if (state[node] === 2) return true;  // already processed

            state[node] = 1;
            for (const neighbor of graph.get(node)) {
                if (!dfs(neighbor)) return false;
            }
            state[node] = 2;
            order.push(node);
            return true;
        }

        for (let i = 1; i <= k; i++) {
            if (state[i] === 0) {
                if (!dfs(i)) return null;
            }
        }

        return order.reverse(); // reverse post-order = topological order
    }

    const rowOrder = topoSort(rowConditions);
    if (!rowOrder) return [];

    const colOrder = topoSort(colConditions);
    if (!colOrder) return [];

    // rowPos[num] = row index, colPos[num] = col index
    const rowPos = new Array(k + 1);
    const colPos = new Array(k + 1);
    for (let i = 0; i < k; i++) {
        rowPos[rowOrder[i]] = i;
        colPos[colOrder[i]] = i;
    }

    // Build the k×k matrix
    const matrix = Array.from({ length: k }, () => new Array(k).fill(0));
    for (let num = 1; num <= k; num++) {
        matrix[rowPos[num]][colPos[num]] = num;
    }

    return matrix;
};

// Helper: verify that a matrix satisfies the given conditions
function isValid(matrix, k, rowConditions, colConditions) {
    if (matrix.length === 0) return false;
    const rowOf = new Array(k + 1);
    const colOf = new Array(k + 1);
    for (let r = 0; r < k; r++) {
        for (let c = 0; c < k; c++) {
            if (matrix[r][c] !== 0) {
                rowOf[matrix[r][c]] = r;
                colOf[matrix[r][c]] = c;
            }
        }
    }
    for (const [a, b] of rowConditions) {
        if (rowOf[a] >= rowOf[b]) return false;
    }
    for (const [a, b] of colConditions) {
        if (colOf[a] >= colOf[b]) return false;
    }
    return true;
}

// --- Tests ---
// Example 1: standard k=3
const result1 = buildMatrix(3, [[1,2],[3,2]], [[2,1],[3,2]]);
console.assert(isValid(result1, 3, [[1,2],[3,2]], [[2,1],[3,2]]), "Test 1 failed");

// Example 2: impossible due to cycle in rowConditions
console.assert(
    JSON.stringify(buildMatrix(3, [[1,2],[2,3],[3,1]], [[1,2]])) === JSON.stringify([]),
    "Test 2 failed"
);

// Example 3: k=1, trivially [[1]]
console.assert(
    JSON.stringify(buildMatrix(1, [], [])) === JSON.stringify([[1]]),
    "Test 3 failed"
);

// Example 4: k=2 with simple ordering
const result4 = buildMatrix(2, [[1,2]], [[2,1]]);
console.assert(isValid(result4, 2, [[1,2]], [[2,1]]), "Test 4 failed");

console.log("All tests passed for 2392-build-a-matrix-with-conditions.js");
