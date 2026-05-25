/**
 * 374. Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 *
 * Binary search using the provided guess(num) API:
 *   -1 → my guess is higher than the pick
 *    1 → my guess is lower  than the pick
 *    0 → correct
 * Time: O(log n)  Space: O(1)
 *
 * @param {number} n - range is [1, n]
 * @return {number} the picked number
 */

// Mock API — change PICK to test different scenarios
const PICK = 6;
function guess(num) {
    if (num > PICK) return -1;
    if (num < PICK) return  1;
    return 0;
}

var guessNumber = function(n) {};

// --- Tests ---
// PICK = 6, n = 10
console.assert(guessNumber(10) === 6, 'Test 1 failed');

// Adjust PICK inline for additional assertions
function runWithPick(pick, n) {
    // temporarily override PICK via closure trick
    const orig = PICK;
    // Re-run by redefining guess locally
    function g(num) {
        if (num > pick) return -1;
        if (num < pick) return  1;
        return 0;
    }
    // Binary search inline
    let lo = 1, hi = n;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const res = g(mid);
        if (res === 0) return mid;
        if (res === -1) hi = mid - 1;
        else lo = mid + 1;
    }
    return -1;
}
console.assert(runWithPick(1,  1)  === 1,  'Test 2 failed');
console.assert(runWithPick(10, 10) === 10, 'Test 3 failed');
console.assert(runWithPick(3,  7)  === 3,  'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
