/**
 * 344. Reverse String
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters s. You must do this by modifying the input array in-place
 * with O(1) extra memory.
 *
 * Examples:
 *   Input:  s = ["h","e","l","l","o"]
 *   Output: ["o","l","l","e","h"]
 *
 *   Input:  s = ["H","a","n","n","a","h"]
 *   Output: ["h","a","n","n","a","H"]
 *
 * Constraints:
 *   - 1 <= s.length <= 10^5
 *   - s[i] is a printable ASCII character
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
};

// Tests
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.assert(JSON.stringify(s1) === JSON.stringify(["o","l","l","e","h"]), `Test 1 failed: ${JSON.stringify(s1)}`);

const s2 = ["H","a","n","n","a","h"];
reverseString(s2);
console.assert(JSON.stringify(s2) === JSON.stringify(["h","a","n","n","a","H"]), `Test 2 failed: ${JSON.stringify(s2)}`);

const s3 = ["a"];
reverseString(s3);
console.assert(JSON.stringify(s3) === JSON.stringify(["a"]), `Test 3 failed: ${JSON.stringify(s3)}`);

const s4 = ["a","b"];
reverseString(s4);
console.assert(JSON.stringify(s4) === JSON.stringify(["b","a"]), `Test 4 failed: ${JSON.stringify(s4)}`);

console.log("All tests passed for 344-reverse-string");
