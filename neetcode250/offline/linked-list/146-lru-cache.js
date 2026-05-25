/**
 * 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 *
 * Design a data structure that follows the constraints of a Least Recently
 * Used (LRU) cache.
 *
 * Implement LRUCache(capacity) which:
 *   - get(key): Returns the value of the key if it exists, otherwise -1.
 *     The key becomes most recently used.
 *   - put(key, value): Updates or inserts the key-value pair. If the number
 *     of keys exceeds the capacity, evict the least recently used key.
 *
 * Both operations must run in O(1) average time.
 * Hint: Use a Map (insertion-order) to track recency.
 *
 * Constraints:
 *   - 1 <= capacity <= 3000
 *   - 0 <= key <= 10^4
 *   - 0 <= value <= 10^5
 *   - At most 2 * 10^5 calls will be made to get and put.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {};

/** @param {number} key @return {number} */
LRUCache.prototype.get = function(key) {};

/** @param {number} key @param {number} value @return {void} */
LRUCache.prototype.put = function(key, value) {};

// --- Tests ---

// Test 1: canonical LeetCode sequence
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.assert(lru.get(1) === 1,  'Test 1a failed: get(1) should return 1');
lru.put(3, 3);                    // evicts key 2 (LRU)
console.assert(lru.get(2) === -1, 'Test 1b failed: key 2 should have been evicted');
lru.put(4, 4);                    // evicts key 1 (LRU, since 3 was just inserted)
console.assert(lru.get(1) === -1, 'Test 1c failed: key 1 should have been evicted');
console.assert(lru.get(3) === 3,  'Test 1d failed: get(3) should return 3');
console.assert(lru.get(4) === 4,  'Test 1e failed: get(4) should return 4');

// Test 2: update existing key refreshes recency
const lru2 = new LRUCache(2);
lru2.put(1, 1);
lru2.put(2, 2);
lru2.put(1, 10);  // update key 1, now key 2 is LRU
lru2.put(3, 3);   // evicts key 2
console.assert(lru2.get(2) === -1, 'Test 2a failed: key 2 should have been evicted after update of key 1');
console.assert(lru2.get(1) === 10, 'Test 2b failed: key 1 should have updated value 10');

// Test 3: capacity 1
const lru3 = new LRUCache(1);
lru3.put(1, 1);
lru3.put(2, 2);   // evicts key 1
console.assert(lru3.get(1) === -1, 'Test 3a failed: key 1 should have been evicted');
console.assert(lru3.get(2) === 2,  'Test 3b failed: get(2) should return 2');

// Test 4: get on missing key returns -1
const lru4 = new LRUCache(3);
console.assert(lru4.get(99) === -1, 'Test 4 failed: get on missing key should return -1');

console.log('All tests passed!');
