/**
 * 787. Cheapest Flights Within K Stops
 *
 * There are `n` cities connected by some number of flights. You are given an array
 * `flights` where flights[i] = [from_i, to_i, price_i] indicates that there is a
 * flight from city from_i to city to_i with cost price_i.
 *
 * Given three integers `src`, `dst`, and `k`, return the cheapest price from src
 * to dst with at most k stops. If there is no such route, return -1.
 *
 * Approach: Bellman-Ford with exactly k+1 relaxation rounds.
 * - Each round represents one more edge (flight) taken.
 * - Use a copy of the distance array from the previous round to avoid using more
 *   than one new edge per round (prevents chaining in the same iteration).
 *
 * Example:
 *   n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1 → 200
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    // prices[i] = cheapest price to reach node i from src
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    // Run k+1 rounds of Bellman-Ford (at most k+1 edges = k stops)
    for (let i = 0; i <= k; i++) {
        // Work on a copy to avoid using newly updated values within same round
        const temp = [...prices];

        for (const [from, to, price] of flights) {
            if (prices[from] === Infinity) continue;
            if (prices[from] + price < temp[to]) {
                temp[to] = prices[from] + price;
            }
        }

        prices = temp;
    }

    return prices[dst] === Infinity ? -1 : prices[dst];
};

// --- Tests ---
// Example 1: 3 cities, 1 stop allowed, cheaper to go 0->1->2 = 200
console.assert(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1) === 200, "Test 1 failed");

// Example 2: 0 stops allowed, must use direct flight 0->2 = 500
console.assert(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0) === 500, "Test 2 failed");

// Example 3: no valid path within k stops, return -1
console.assert(findCheapestPrice(3, [[0,1,100],[1,2,100]], 0, 2, 0) === -1, "Test 3 failed");

// Example 4: multiple paths, find cheapest with enough stops
console.assert(
    findCheapestPrice(4, [[0,1,1],[0,2,5],[1,2,1],[2,3,1]], 0, 3, 2) === 3,
    "Test 4 failed"
);

console.log("All tests passed for 787-cheapest-flights-within-k-stops.js");
