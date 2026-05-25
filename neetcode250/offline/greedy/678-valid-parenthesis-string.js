/**
 * 678. Valid Parenthesis String
 *
 * Given a string s containing only '(', ')' and '*', return true if s is valid.
 * '*' can be treated as '(', ')' or an empty string.
 * A string is valid if every '(' has a corresponding ')' and they are properly nested.
 *
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
};

console.assert(checkValidString("()") === true, "Test 1 failed");
console.assert(checkValidString("(*)") === true, "Test 2 failed");
console.assert(checkValidString("(*))") === true, "Test 3 failed");
console.assert(checkValidString("(((*)" ) === false, "Test 4 failed");
