/**
 * 981. Time Based Key-Value Store
 * https://leetcode.com/problems/time-based-key-value-store/
 *
 * Design a data structure that stores (key, value, timestamp) tuples.
 *   set(key, value, timestamp) — store the value at the given timestamp.
 *   get(key, timestamp)        — return the value with the largest timestamp
 *                                ≤ given timestamp, or "" if none exists.
 * Timestamps for set() are strictly increasing per key.
 * Time: set O(1), get O(log n)  Space: O(n)
 */

var TimeMap = function() {};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {};

// --- Tests ---
const tm = new TimeMap();
tm.set('foo', 'bar', 1);
console.assert(tm.get('foo', 1)  === 'bar', 'Test 1 failed');
console.assert(tm.get('foo', 3)  === 'bar', 'Test 2 failed');
tm.set('foo', 'bar2', 4);
console.assert(tm.get('foo', 4)  === 'bar2','Test 3 failed');
console.assert(tm.get('foo', 5)  === 'bar2','Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
