/**
 * 622. Design Circular Queue
 * https://leetcode.com/problems/design-circular-queue/
 *
 * Design your implementation of the circular queue. The circular queue is a
 * linear data structure that follows the FIFO principle and the last position
 * is connected back to the first to make a circle. It is also called a "Ring
 * Buffer".
 *
 * Implement MyCircularQueue(k) which:
 *   - enQueue(value): Inserts an element. Returns true on success, false if full.
 *   - deQueue(): Deletes the front element. Returns true on success, false if empty.
 *   - Front(): Returns the front element. Returns -1 if empty.
 *   - Rear(): Returns the last element. Returns -1 if empty.
 *   - isEmpty(): Checks whether the queue is empty.
 *   - isFull(): Checks whether the queue is full.
 *
 * Constraints:
 *   - 1 <= k <= 1000
 *   - 0 <= value <= 1000
 *   - At most 3000 calls will be made to the methods.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {};

/** @param {number} value @return {boolean} */
MyCircularQueue.prototype.enQueue = function(value) {};

/** @return {boolean} */
MyCircularQueue.prototype.deQueue = function() {};

/** @return {number} */
MyCircularQueue.prototype.Front = function() {};

/** @return {number} */
MyCircularQueue.prototype.Rear = function() {};

/** @return {boolean} */
MyCircularQueue.prototype.isEmpty = function() {};

/** @return {boolean} */
MyCircularQueue.prototype.isFull = function() {};

// --- Tests ---

// Test 1: basic enQueue / Front / Rear
const q1 = new MyCircularQueue(3);
console.assert(q1.isEmpty() === true,    'Test 1a failed: new queue should be empty');
console.assert(q1.enQueue(1) === true,   'Test 1b failed: enQueue on non-full queue should return true');
console.assert(q1.enQueue(2) === true,   'Test 1c failed: enQueue on non-full queue should return true');
console.assert(q1.Front() === 1,         'Test 1d failed: Front should be 1');
console.assert(q1.Rear() === 2,          'Test 1e failed: Rear should be 2');

// Test 2: fill to capacity, then reject
const q2 = new MyCircularQueue(2);
q2.enQueue(10);
q2.enQueue(20);
console.assert(q2.isFull() === true,     'Test 2a failed: queue should be full');
console.assert(q2.enQueue(30) === false, 'Test 2b failed: enQueue on full queue should return false');

// Test 3: deQueue and wrap-around
const q3 = new MyCircularQueue(3);
q3.enQueue(1); q3.enQueue(2); q3.enQueue(3);
console.assert(q3.deQueue() === true,    'Test 3a failed: deQueue on non-empty queue should return true');
console.assert(q3.Front() === 2,         'Test 3b failed: after deQueue front should be 2');
console.assert(q3.enQueue(4) === true,   'Test 3c failed: should be able to enQueue after deQueue');
console.assert(q3.Rear() === 4,          'Test 3d failed: rear should be 4 after wrap-around enQueue');

// Test 4: empty queue returns -1 for Front / Rear, false for deQueue
const q4 = new MyCircularQueue(1);
console.assert(q4.Front() === -1,        'Test 4a failed: Front on empty queue should be -1');
console.assert(q4.Rear() === -1,         'Test 4b failed: Rear on empty queue should be -1');
console.assert(q4.deQueue() === false,   'Test 4c failed: deQueue on empty queue should return false');

console.log('All tests passed!');
