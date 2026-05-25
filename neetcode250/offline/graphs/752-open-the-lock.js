/**
 * 752. Open the Lock
 *
 * You have a lock in front of you with 4 circular wheels. Each wheel has 10
 * slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can
 * rotate freely and wrap around, e.g. '9' can turn to '0' and '0' can turn to '9'.
 *
 * The lock initially starts at '0000', a string representing the state of the
 * 4 wheels.
 *
 * You are given a list of deadends — if the lock reaches any of these codes,
 * the wheels of the lock will stop turning and you will be unable to open it.
 *
 * Given a target representing the value of the wheels that will unlock the lock,
 * return the minimum total number of turns required to open the lock, or -1 if
 * it is impossible.
 *
 * Example 1:
 *   deadends = ["0201","0101","0102","1212","2002"], target = "0202" => 6
 *
 * Example 2:
 *   deadends = ["8888"], target = "0009" => 1
 *
 * Example 3:
 *   deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"],
 *   target = "8888" => -1
 *
 * Constraints:
 *   - 1 <= deadends.length <= 500
 *   - deadends[i].length == 4
 *   - target.length == 4
 *   - target will not be in the list of deadends.
 *   - target and deadends[i] consist of digits only.
 */

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {

};

// Tests
console.assert(
  openLock(["0201","0101","0102","1212","2002"], "0202") === 6,
  'Test 1 failed: expected 6'
);

console.assert(
  openLock(["8888"], "0009") === 1,
  'Test 2 failed: expected 1'
);

console.assert(
  openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888") === -1,
  'Test 3 failed: expected -1'
);

console.assert(
  openLock(["0000"], "8888") === -1,
  'Test 4 failed: starting position is a deadend, expected -1'
);

console.log('All tests passed for 752-open-the-lock');
