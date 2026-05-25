/**
 * 190. Reverse Bits
 *
 * Reverse the bits of a given 32-bit unsigned integer.
 *
 * Process each of the 32 bits: build the result by shifting it left and ORing
 * in the least significant bit of n, then shift n right.
 * Use >>> 0 to treat JavaScript numbers as unsigned 32-bit integers.
 *
 * Examples:
 *   n = 43261596   (00000010100101000001111010011100)
 *     → 964176192  (00111001011110000010100101000000)
 *
 *   n = 4294967293 (11111111111111111111111111111101)
 *     → 1073741827 (10111111111111111111111111111111 treated as unsigned)
 *     Wait — reversing 11111111111111111111111111111101 gives 10111111111111111111111111111111 = 3221225471
 *     LeetCode stores result as unsigned; JavaScript may show as signed.
 *     The expected unsigned value is 3221225471.
 *
 * @param {number} n - treated as unsigned 32-bit integer
 * @return {number}  - unsigned 32-bit integer
 */
var reverseBits = function(n) {

};

// Tests
console.assert(reverseBits(43261596) === 964176192, "Test 1 failed");
// 0b00000000000000000000000000000001 reversed = 0b10000000000000000000000000000000 = 2147483648
console.assert(reverseBits(1) === 2147483648, "Test 2 failed");
// All zeros
console.assert(reverseBits(0) === 0, "Test 3 failed");
// 0b11111111111111111111111111111111 reversed = same = 4294967295
console.assert(reverseBits(4294967295) === 4294967295, "Test 4 failed");
