/**
 * 705. Design HashSet
 *
 * Design a HashSet without using any built-in hash table libraries.
 * Implement the MyHashSet class:
 *   - MyHashSet()        Initializes the object with an empty set.
 *   - add(key)          Inserts the value key into the HashSet.
 *   - remove(key)       Removes the value key in the HashSet.
 *                       If key does not exist in the HashSet, do nothing.
 *   - contains(key)     Returns whether the value key exists in the HashSet.
 *
 * Examples:
 *   myHashSet.add(1);       myHashSet.contains(1) => true
 *   myHashSet.add(2);       myHashSet.contains(3) => false
 *   myHashSet.remove(2);    myHashSet.contains(2) => false
 *
 * Constraints:
 *   - 0 <= key <= 10^6
 *   - At most 10^4 calls will be made to add, remove, and contains.
 *   - Implement without using built-in hash tables (Set/Map/Object as a map).
 */

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
};

// Tests
(function() {
  const hs = new MyHashSet();
  hs.add(1);
  hs.add(2);
  console.assert(hs.contains(1) === true,  "Test 1 failed: contains(1) after add(1) => true");
  console.assert(hs.contains(3) === false, "Test 2 failed: contains(3) without add => false");
  hs.add(2);
  console.assert(hs.contains(2) === true,  "Test 3 failed: contains(2) after add(2) => true");
  hs.remove(2);
  console.assert(hs.contains(2) === false, "Test 4 failed: contains(2) after remove(2) => false");
})();

console.log("All tests passed for 705-design-hashset");
