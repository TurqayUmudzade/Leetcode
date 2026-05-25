/**
 * 332. Reconstruct Itinerary
 *
 * You are given a list of airline tickets represented by pairs of departure and
 * arrival airports [from, to]. Reconstruct the itinerary in order. All of the
 * tickets must be used once and only once.
 *
 * The itinerary must begin with "JFK". If there are multiple valid itineraries,
 * return the itinerary that has the smallest lexical order when read as a single
 * string (i.e., the lexicographically smallest valid itinerary).
 *
 * Approach: Hierholzer's algorithm for finding an Eulerian path.
 * - Build adjacency list with destinations sorted in lexicographic order.
 * - Perform a DFS, and append nodes to the result in post-order (when no more
 *   outgoing edges). Reverse the result at the end.
 *
 * Example:
 *   tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 *   → ["JFK","MUC","LHR","SFO","SJC"]
 */

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // Build adjacency list, sorted lexicographically per source
    const graph = new Map();
    for (const [from, to] of tickets) {
        if (!graph.has(from)) graph.set(from, []);
        graph.get(from).push(to);
    }
    for (const [, destinations] of graph) {
        destinations.sort();
    }

    const result = [];

    function dfs(airport) {
        const destinations = graph.get(airport) || [];
        while (destinations.length > 0) {
            const next = destinations.shift();
            dfs(next);
        }
        result.push(airport);
    }

    dfs("JFK");
    return result.reverse();
};

// --- Tests ---
// Example 1: standard itinerary
console.assert(
    JSON.stringify(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]))
    === JSON.stringify(["JFK","MUC","LHR","SFO","SJC"]),
    "Test 1 failed"
);

// Example 2: multiple valid paths, pick lexicographically smallest
console.assert(
    JSON.stringify(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))
    === JSON.stringify(["JFK","ATL","JFK","SFO","ATL","SFO"]),
    "Test 2 failed"
);

// Example 3: single ticket
console.assert(
    JSON.stringify(findItinerary([["JFK","LAX"]]))
    === JSON.stringify(["JFK","LAX"]),
    "Test 3 failed"
);

// Example 4: two tickets forming a simple round trip
console.assert(
    JSON.stringify(findItinerary([["JFK","BOS"],["BOS","JFK"]]))
    === JSON.stringify(["JFK","BOS","JFK"]),
    "Test 4 failed"
);

console.log("All tests passed for 332-reconstruct-itinerary.js");
