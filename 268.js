var missingNumber = function (arr) {
    let set = new Set()
    arr.forEach(element => set.add(element));

    for (let i = 0; i < arr.length; i++)
        if (!set.has(i)) return i

    return arr.length
};