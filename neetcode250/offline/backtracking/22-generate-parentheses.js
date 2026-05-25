/**
 * 22. Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * Example 1:
 *   Input:  n = 1
 *   Output: ["()"]
 *
 * Example 2:
 *   Input:  n = 3
 *   Output: ["((()))","(()())","(())()","()(())","()()()"]  (5 results)
 *
 * Constraints:
 *   1 <= n <= 8
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

};

// --- tests ---
const r1 = generateParenthesis(1);
console.assert(
    Array.isArray(r1) && r1.length === 1 && r1[0] === '()',
    'Test 1 failed: n=1 should return ["()"]'
);

const r3 = generateParenthesis(3);
console.assert(r3.length === 5, `Test 2 failed: n=3 should have 5 results, got ${r3 && r3.length}`);

const expected3 = ['((()))', '(()())', '(())()', '()(())', '()()()'];
console.assert(
    JSON.stringify(r3.slice().sort()) === JSON.stringify(expected3.slice().sort()),
    'Test 3 failed: n=3 content mismatch'
);

const r2 = generateParenthesis(2);
console.assert(r2.length === 2, `Test 4 failed: n=2 should have 2 results, got ${r2 && r2.length}`);

console.log('All tests passed for 22-generate-parentheses');
