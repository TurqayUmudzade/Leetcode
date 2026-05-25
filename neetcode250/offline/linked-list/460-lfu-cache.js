/**
 * 460. LFU Cache
 * https://leetcode.com/problems/lfu-cache/
 *
 * Design and implement a data structure for a Least Frequently Used (LFU)
 * cache. When the cache reaches its capacity, the least frequently used key
 * should be invalidated before inserting a new key. If multiple keys have the
 * same minimum frequency, the least recently used among them is evicted.
 *
 * Implement LFUCache(capacity) which:
 *   - get(key): Returns the value if the key exists, otherwise -1. Increments
 *     the key's usage frequency.
 *   - put(key, value): Updates or inserts the key-value pair. If capacity is
 *     reached, evicts the LFU (LRU tie-break) key first.
 *
 * Both operations must run in O(1) average time.
 *
 * Constraints:
 *   - 1 <= capacity <= 10^4
 *   - 0 <= key <= 10^5
 *   - 0 <= value <= 10^9
 *   - At most 2 * 10^5 calls will be made to get and put.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {};

/** @param {number} key @return {number} */
LFUCache.prototype.get = function(key) {};

/** @param {number} key @param {number} value @return {void} */
LFUCache.prototype.put = function(key, value) {};

// --- Tests ---

// Test 1: canonical LeetCode sequence (capacity=2)
const lfu = new LFUCache(2);
lfu.put(1, 1);              // freq: {1:1}
lfu.put(2, 2);              // freq: {1:1, 2:1}
console.assert(lfu.get(1) === 1,  'Test 1a failed: get(1) should return 1');  // freq: {1:2, 2:1}
lfu.put(3, 3);              // evicts key 2 (freq 1, LRU). freq: {1:2, 3:1}
console.assert(lfu.get(2) === -1, 'Test 1b failed: key 2 should have been evicted');
console.assert(lfu.get(3) === 3,  'Test 1c failed: get(3) should return 3');  // freq: {1:2, 3:2}

// Test 2: LRU tie-break — among equal-frequency keys, evict the least recently used
const lfu2 = new LFUCache(2);
lfu2.put(1, 1);
lfu2.put(2, 2);
lfu2.get(1);   // key 1 freq becomes 2; key 2 stays at freq 1
lfu2.get(1);   // key 1 freq becomes 3
lfu2.put(3, 3); // evicts key 2 (lowest freq)
console.assert(lfu2.get(2) === -1, 'Test 2a failed: key 2 should have been evicted (lowest freq)');
console.assert(lfu2.get(1) === 1,  'Test 2b failed: get(1) should return 1');

// Test 3: update existing key preserves it
const lfu3 = new LFUCache(2);
lfu3.put(1, 1);
lfu3.put(1, 2);  // update value of key 1
console.assert(lfu3.get(1) === 2, 'Test 3 failed: updated value should be returned');

// Test 4: capacity=0 edge case — get/put are no-ops
const lfu4 = new LFUCache(0);
lfu4.put(1, 1);
console.assert(lfu4.get(1) === -1, 'Test 4 failed: capacity-0 cache should always return -1');

console.log('All tests passed!');
