/**
 * 225. Implement Stack using Queues
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues. The
 * implemented stack should support all functions of a normal stack: push, pop,
 * top, and empty.
 *
 * Implement the MyStack class:
 *   - MyStack()       Initializes the stack object.
 *   - push(int x)     Pushes element x to the top of the stack.
 *   - pop()           Removes the element on the top of the stack and returns it.
 *   - top()           Returns the element on the top of the stack.
 *   - empty()         Returns true if the stack is empty, false otherwise.
 *
 * Notes:
 *   - You must use only standard queue operations: push to back, peek/pop from
 *     front, size, and is empty.
 *   - You may simulate a queue using a list or deque, as long as you use only
 *     standard queue operations.
 *
 * Example:
 *   Input:  ["MyStack","push","push","top","pop","empty"]
 *           [[],[1],[2],[],[],[]]
 *   Output: [null,null,null,2,2,false]
 *
 * Constraints:
 *   - 1 <= x <= 9
 *   - At most 100 calls will be made to push, pop, top, and empty.
 *   - All calls to pop and top are valid.
 */

var MyStack = function() {

};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {

};

// Tests
const stack = new MyStack();
stack.push(1);
stack.push(2);
console.assert(stack.top() === 2, "Test 1 failed");
console.assert(stack.pop() === 2, "Test 2 failed");
console.assert(stack.empty() === false, "Test 3 failed");
console.assert(stack.pop() === 1, "Test 4 failed");
console.assert(stack.empty() === true, "Test 5 failed");
console.log("All tests passed!");
