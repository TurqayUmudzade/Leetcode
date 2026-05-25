/**
 * 232. Implement Queue using Stacks
 *
 * Implement a first-in-first-out (FIFO) queue using only two stacks. The
 * implemented queue should support all functions of a normal queue: push, pop,
 * peek, and empty.
 *
 * Implement the MyQueue class:
 *   - MyQueue()       Initializes the queue object.
 *   - push(int x)     Pushes element x to the back of the queue.
 *   - pop()           Removes the element from the front of the queue and returns it.
 *   - peek()          Returns the element at the front of the queue.
 *   - empty()         Returns true if the queue is empty, false otherwise.
 *
 * Notes:
 *   - You must use only standard stack operations: push to top, peek/pop from
 *     top, size, and is empty.
 *   - Depending on your language, the stack may not be supported natively. You
 *     may simulate a stack using a list or deque, so long as you use only a
 *     stack's standard operations.
 *
 * Example:
 *   Input:  ["MyQueue","push","push","peek","pop","empty"]
 *           [[],[1],[2],[],[],[]]
 *   Output: [null,null,null,1,1,false]
 *
 * Constraints:
 *   - 1 <= x <= 9
 *   - At most 100 calls will be made to push, pop, peek, and empty.
 *   - All calls to pop and peek are valid.
 */

var MyQueue = function() {

};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {

};

// Tests
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.assert(queue.peek() === 1, "Test 1 failed");
console.assert(queue.pop() === 1, "Test 2 failed");
console.assert(queue.empty() === false, "Test 3 failed");
console.assert(queue.pop() === 2, "Test 4 failed");
console.assert(queue.empty() === true, "Test 5 failed");
console.log("All tests passed!");
