/**
 * 860. Lemonade Change
 *
 * At a lemonade stand, each lemonade costs $5. Customers pay with $5, $10, or $20 bills.
 * You start with no change. Return true if you can provide every customer with the correct
 * change, or false otherwise.
 *
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
};

console.assert(lemonadeChange([5, 5, 5, 10, 20]) === true, "Test 1 failed");
console.assert(lemonadeChange([5, 5, 10, 10, 20]) === false, "Test 2 failed");
console.assert(lemonadeChange([5]) === true, "Test 3 failed");
console.assert(lemonadeChange([10, 10]) === false, "Test 4 failed");
