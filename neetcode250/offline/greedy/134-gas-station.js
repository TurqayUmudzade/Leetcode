/**
 * 134. Gas Station
 *
 * There are n gas stations arranged in a circle. gas[i] is the amount of gas at station i.
 * cost[i] is the gas needed to travel from station i to station i+1.
 * You start with an empty tank. Return the starting station index if you can travel around
 * the circuit once in the clockwise direction, or -1 if it is not possible.
 * If a solution exists, it is guaranteed to be unique.
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
};

console.assert(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) === 3, "Test 1 failed");
console.assert(canCompleteCircuit([2, 3, 4], [3, 4, 3]) === -1, "Test 2 failed");
console.assert(canCompleteCircuit([5], [4]) === 0, "Test 3 failed");
console.assert(canCompleteCircuit([3, 1, 1], [1, 2, 2]) === 0, "Test 4 failed");
