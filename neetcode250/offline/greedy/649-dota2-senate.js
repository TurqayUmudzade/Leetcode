/**
 * 649. Dota2 Senate
 *
 * In a Dota2 senate, there are Radiant ('R') and Dire ('D') senators. Each senator can
 * either ban one opponent senator's rights or announce victory if no opponents remain.
 * Senators act in order and the process cycles. Given the senate string, return "Radiant"
 * if Radiant wins or "Dire" if Dire wins (both parties play optimally).
 *
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
};

console.assert(predictPartyVictory("RD") === "Radiant", "Test 1 failed");
console.assert(predictPartyVictory("RDD") === "Dire", "Test 2 failed");
console.assert(predictPartyVictory("RRDDD") === "Dire", "Test 3 failed");
console.assert(predictPartyVictory("R") === "Radiant", "Test 4 failed");
