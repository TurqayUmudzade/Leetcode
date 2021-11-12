var groupAnagrams = function (strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return Array.from(m.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagrams(strs))