/**
 * 269. Alien Dictionary (Premium)
 *
 * There is a new alien language that uses the English alphabet. However, the order
 * of the letters is unknown. You are given a list of strings `words` from the alien
 * language's dictionary, where the strings are sorted lexicographically by the rules
 * of this new language.
 *
 * Return a string of the unique letters in the new alien language sorted in
 * lexicographically increasing order as defined by the new language. If there is no
 * valid solution, return "". If there are multiple solutions, return any of them.
 *
 * Approach: Topological Sort (Kahn's BFS algorithm).
 * - Compare adjacent words to derive ordering constraints (edges in a DAG).
 * - Topological sort the characters. If a cycle is detected, return "".
 * - Edge case: if a longer word is a prefix of a shorter adjacent word, return "".
 *
 * Example:
 *   words = ["wrt","wrf","er","ett","rftt"] → "wertf"
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    // Collect all unique characters
    const inDegree = new Map();
    const graph = new Map();

    for (const word of words) {
        for (const ch of word) {
            if (!inDegree.has(ch)) inDegree.set(ch, 0);
            if (!graph.has(ch)) graph.set(ch, new Set());
        }
    }

    // Build graph by comparing adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const minLen = Math.min(w1.length, w2.length);
        let found = false;

        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                // w1[j] comes before w2[j]
                if (!graph.get(w1[j]).has(w2[j])) {
                    graph.get(w1[j]).add(w2[j]);
                    inDegree.set(w2[j], inDegree.get(w2[j]) + 1);
                }
                found = true;
                break;
            }
        }

        // Invalid: longer word is a prefix of shorter word (e.g. ["abc","ab"])
        if (!found && w1.length > w2.length) return "";
    }

    // Kahn's BFS topological sort
    const queue = [];
    for (const [ch, deg] of inDegree) {
        if (deg === 0) queue.push(ch);
    }
    queue.sort(); // For deterministic ordering among zero-degree nodes

    let result = "";
    while (queue.length > 0) {
        queue.sort(); // maintain lexicographic processing among equal-degree nodes
        const ch = queue.shift();
        result += ch;

        for (const neighbor of graph.get(ch)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Cycle detected: not all characters were processed
    if (result.length !== inDegree.size) return "";
    return result;
};

// --- Tests ---
// Example 1: standard alien dictionary
console.assert(alienOrder(["wrt","wrf","er","ett","rftt"]) === "wertf", "Test 1 failed");

// Example 2: simple two-word comparison
console.assert(alienOrder(["z","x"]) === "zx", "Test 2 failed");

// Example 3: invalid — longer word is prefix of shorter following word
console.assert(alienOrder(["abc","ab"]) === "", "Test 3 failed");

// Example 4: single word, all chars have no ordering constraints (any permutation valid)
// Just verify all 3 chars are present in output
const result4 = alienOrder(["abc"]);
console.assert(
    result4.length === 3 && result4.includes("a") && result4.includes("b") && result4.includes("c"),
    "Test 4 failed"
);

console.log("All tests passed for 269-alien-dictionary.js");
