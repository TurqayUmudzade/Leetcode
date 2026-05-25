/**
 * 706. Design HashMap
 *
 * Design a HashMap without using any built-in hash table libraries.
 * Implement the MyHashMap class:
 *   - MyHashMap()              Initializes the object with an empty map.
 *   - put(key, value)          Inserts a (key, value) pair into the HashMap.
 *                              If key already exists, update its value.
 *   - get(key)                 Returns the value to which key is mapped,
 *                              or -1 if this map contains no mapping for key.
 *   - remove(key)              Removes the key and its associated value if
 *                              the map contains the mapping for key.
 *
 * Examples:
 *   myHashMap.put(1, 1);   myHashMap.get(1)  => 1
 *   myHashMap.put(2, 2);   myHashMap.get(3)  => -1
 *   myHashMap.put(2, 1);   myHashMap.get(2)  => 1  (updated)
 *   myHashMap.remove(2);   myHashMap.get(2)  => -1
 *
 * Constraints:
 *   - 0 <= key, value <= 10^6
 *   - At most 10^4 calls will be made to put, get, and remove.
 *   - Implement without using built-in hash tables (Map/Object as a map).
 */

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
};

// Tests
(function() {
  const hm = new MyHashMap();
  hm.put(1, 1);
  hm.put(2, 2);
  console.assert(hm.get(1) === 1,  "Test 1 failed: get(1) after put(1,1) => 1");
  console.assert(hm.get(3) === -1, "Test 2 failed: get(3) without put => -1");
  hm.put(2, 1);
  console.assert(hm.get(2) === 1,  "Test 3 failed: get(2) after update put(2,1) => 1");
  hm.remove(2);
  console.assert(hm.get(2) === -1, "Test 4 failed: get(2) after remove(2) => -1");
})();

console.log("All tests passed for 706-design-hashmap");
