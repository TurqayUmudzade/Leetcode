/**
 * 895. Maximum Frequency Stack
 *
 * Design a stack-like data structure to push elements to the stack and pop
 * the most frequent element from the stack.
 *
 * Implement the FreqStack class:
 *   FreqStack()    Constructs an empty frequency stack.
 *   push(val)      Pushes an integer `val` onto the top of the stack.
 *   pop()          Removes and returns the most frequent element in the stack.
 *                  If there is a tie for the most frequent element, the element
 *                  closest to the top of the stack (most recently pushed) is
 *                  removed and returned.
 *
 * Approach:
 *   - freq map: val → current frequency
 *   - group map: frequency → stack of values with that frequency
 *   - maxFreq: track current maximum frequency
 *
 * Example push sequence: 5, 7, 5, 7, 4, 5
 *   pop() → 5  (freq 3)
 *   pop() → 7  (freq 2, most recent of tied freq-2 vals)
 *   pop() → 5  (freq 2)
 *   pop() → 4  (freq 1, most recent of tied freq-1 vals)
 *
 * Constraints:
 *   0 <= val <= 10^9
 *   At most 2 * 10^4 calls to push and pop.
 *   It is guaranteed that there will be at least one element in the stack
 *   before calling pop.
 */

class FreqStack {
  constructor() {

  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {

  }

  /**
   * @return {number}
   */
  pop() {

  }
}

// --- Tests ---
const fs = new FreqStack();
fs.push(5); fs.push(7); fs.push(5); fs.push(7); fs.push(4); fs.push(5);
console.assert(fs.pop() === 5, 'Test 1 failed');
console.assert(fs.pop() === 7, 'Test 2 failed');
console.assert(fs.pop() === 5, 'Test 3 failed');
console.assert(fs.pop() === 4, 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
