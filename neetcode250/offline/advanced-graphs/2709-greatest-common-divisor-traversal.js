/**
 * 2709. Greatest Common Divisor Traversal
 *
 * You are given a 0-indexed integer array `nums`. There is an edge between the
 * indices i and j if gcd(nums[i], nums[j]) > 1.
 *
 * Return true if for every pair of indices i and j in the range [0, n-1],
 * you can traverse from i to j (directly or indirectly). Otherwise return false.
 *
 * Approach: Union-Find + prime factorization.
 * - For each number, find its prime factors.
 * - Union the index of the number with a "virtual" node for each prime factor.
 * - Two numbers sharing a prime factor get connected through that prime's virtual node.
 * - At the end, check if all number indices belong to the same component.
 *
 * Example:
 *   nums = [2,3,6] → true  (2 and 6 share factor 2; 3 and 6 share factor 3)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function(nums) {
    const n = nums.length;
    if (n === 1) return true;

    // Union-Find
    // Nodes 0..n-1 represent nums indices
    // We'll map prime factors to "virtual" node IDs starting at n
    const parent = [];
    const rank = [];

    function init(size) {
        for (let i = 0; i < size; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }

    function find(x) {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(x, y) {
        const px = find(x), py = find(y);
        if (px === py) return;
        if (rank[px] < rank[py]) parent[px] = py;
        else if (rank[px] > rank[py]) parent[py] = px;
        else { parent[py] = px; rank[px]++; }
    }

    // Get smallest prime factor for each number via sieve up to max(nums)
    const maxVal = Math.max(...nums);
    const spf = Array.from({ length: maxVal + 1 }, (_, i) => i); // smallest prime factor
    for (let i = 2; i * i <= maxVal; i++) {
        if (spf[i] === i) { // i is prime
            for (let j = i * i; j <= maxVal; j += i) {
                if (spf[j] === j) spf[j] = i;
            }
        }
    }

    // Map prime -> virtual node ID
    const primeNode = new Map();
    let nextId = n;

    // We'll grow parent/rank dynamically
    init(n);

    function getOrCreatePrimeNode(p) {
        if (!primeNode.has(p)) {
            primeNode.set(p, nextId);
            parent[nextId] = nextId;
            rank[nextId] = 0;
            nextId++;
        }
        return primeNode.get(p);
    }

    for (let i = 0; i < n; i++) {
        let val = nums[i];
        while (val > 1) {
            const p = spf[val];
            const pNode = getOrCreatePrimeNode(p);
            union(i, pNode);
            // Skip duplicate factors
            while (val % p === 0) val = Math.floor(val / p);
        }
    }

    // Check all number indices are in the same component
    const root = find(0);
    for (let i = 1; i < n; i++) {
        if (find(i) !== root) return false;
    }
    return true;
};

// --- Tests ---
// Example 1: 2 and 3 connect through 6
console.assert(canTraverseAllPairs([2, 3, 6]) === true, "Test 1 failed");

// Example 2: [3, 9, 5] — 3 and 9 share factor 3, but 5 is isolated
console.assert(canTraverseAllPairs([3, 9, 5]) === false, "Test 2 failed");

// Example 3: single element, trivially true
console.assert(canTraverseAllPairs([1]) === true, "Test 3 failed");

// Example 4: all numbers share the same prime factor 2
console.assert(canTraverseAllPairs([2, 4, 8, 16]) === true, "Test 4 failed");

console.log("All tests passed for 2709-greatest-common-divisor-traversal.js");
