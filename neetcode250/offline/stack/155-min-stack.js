/**
 * 155. Min Stack
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 * Implement the MinStack class:
 *   - MinStack()         Initializes the stack object.
 *   - push(int val)      Pushes the element val onto the stack.
 *   - pop()              Removes the element on top of the stack.
 *   - top()              Gets the top element of the stack.
 *   - getMin()           Retrieves the minimum element in the stack.
 *
 * You must implement a solution with O(1) time complexity for each function.
 *
 * Example:
 *   Input:  ["MinStack","push","push","push","getMin","pop","top","getMin"]
 *           [[],[-2],[0],[-3],[],[],[],[]]
 *   Output: [null,null,null,null,-3,null,0,-2]
 *
 * Constraints:
 *   - -2^31 <= val <= 2^31 - 1
 *   - Methods pop, top and getMin operations will always be called on non-empty stacks.
 *   - At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
 */

var MinStack = function() {

};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};

// Tests
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.assert(minStack.getMin() === -3, "Test 1 failed");
minStack.pop();
console.assert(minStack.top() === 0, "Test 2 failed");
console.assert(minStack.getMin() === -2, "Test 3 failed");
minStack.push(-1);
console.assert(minStack.getMin() === -2, "Test 4 failed");
console.log("All tests passed!");
