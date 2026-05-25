/**
 * 682. Baseball Game
 *
 * You are keeping score for a baseball game with strange rules. At the beginning
 * of the game you start with an empty record. Given a list of strings ops, where
 * ops[i] may be one of the following:
 *   - An integer x: record a new score of x.
 *   - "+": record a new score equal to the sum of the previous two scores.
 *   - "D": record a new score equal to double the previous score.
 *   - "C": invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the record after applying all operations.
 *
 * Example 1:
 *   Input: ops = ["5","2","C","D","+"]
 *   Output: 30
 *   Explanation:
 *     "5" -> record = [5]
 *     "2" -> record = [5, 2]
 *     "C" -> record = [5]
 *     "D" -> record = [5, 10]
 *     "+" -> record = [5, 10, 15]
 *     Sum = 30
 *
 * Example 2:
 *   Input: ops = ["5","-2","4","C","D","9","+","+"]
 *   Output: 27
 *
 * Constraints:
 *   - 1 <= ops.length <= 1000
 *   - ops[i] is "C", "D", "+", or a string representing an integer.
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {

};

// Tests
console.assert(calPoints(["5","2","C","D","+"]) === 30, "Test 1 failed");
console.assert(calPoints(["5","-2","4","C","D","9","+","+"]) === 27, "Test 2 failed");
console.assert(calPoints(["1","C"]) === 0, "Test 3 failed");
console.assert(calPoints(["1","2","3","4"]) === 10, "Test 4 failed");
console.log("All tests passed!");
