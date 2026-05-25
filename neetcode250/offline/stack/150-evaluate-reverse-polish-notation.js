/**
 * 150. Evaluate Reverse Polish Notation
 *
 * You are given an array of strings tokens that represents an arithmetic
 * expression in Reverse Polish Notation. Evaluate the expression and return an
 * integer that represents the value of the expression.
 *
 * Notes:
 *   - The valid operators are '+', '-', '*', and '/'.
 *   - Each operand may be an integer or another expression.
 *   - Division between two integers always truncates toward zero.
 *   - There will not be any division by zero.
 *   - The answer and all intermediate calculations can be represented in a 32-bit integer.
 *
 * Example 1:
 *   Input: tokens = ["2","1","+","3","*"]
 *   Output: 9
 *   Explanation: ((2 + 1) * 3) = 9
 *
 * Example 2:
 *   Input: tokens = ["4","13","5","/","+"]
 *   Output: 6
 *   Explanation: (4 + (13 / 5)) = 6
 *
 * Example 3:
 *   Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 *   Output: 22
 *
 * Constraints:
 *   - 1 <= tokens.length <= 10^4
 *   - tokens[i] is either an operator ("+", "-", "*", "/") or an integer.
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

};

// Tests
console.assert(evalRPN(["2","1","+","3","*"]) === 9, "Test 1 failed");
console.assert(evalRPN(["4","13","5","/","+"]) === 6, "Test 2 failed");
console.assert(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) === 22, "Test 3 failed");
console.assert(evalRPN(["3","-4","+"]) === -1, "Test 4 failed");
console.log("All tests passed!");
