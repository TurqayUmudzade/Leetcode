/**
 * 17. Letter Combinations of a Phone Number
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer in
 * any order.
 *
 * Phone keypad mapping:
 *   2 → "abc"  3 → "def"  4 → "ghi"  5 → "jkl"
 *   6 → "mno"  7 → "pqrs" 8 → "tuv"  9 → "wxyz"
 *
 * Example 1:
 *   Input:  digits = "23"
 *   Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]  (9 combos)
 *
 * Example 2:
 *   Input:  digits = ""
 *   Output: []
 *
 * Example 3:
 *   Input:  digits = "2"
 *   Output: ["a","b","c"]
 *
 * Constraints:
 *   0 <= digits.length <= 4
 *   digits[i] is a digit in the range ['2', '9'].
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

};

// --- tests ---
const r1 = letterCombinations('23');
console.assert(r1.length === 9, `Test 1 failed: expected 9, got ${r1 && r1.length}`);

const r2 = letterCombinations('');
console.assert(Array.isArray(r2) && r2.length === 0, 'Test 2 failed: empty input should return []');

const r3 = letterCombinations('2');
console.assert(
    JSON.stringify(r3.slice().sort()) === JSON.stringify(['a', 'b', 'c']),
    'Test 3 failed: digits="2" should return ["a","b","c"]'
);

const r4 = letterCombinations('9');
console.assert(
    JSON.stringify(r4.slice().sort()) === JSON.stringify(['w', 'x', 'y', 'z']),
    'Test 4 failed: digits="9" should return ["w","x","y","z"]'
);

console.log('All tests passed for 17-letter-combinations-of-a-phone-number');
