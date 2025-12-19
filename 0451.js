var frequencySort = function (str) {
    let map = new Map()

    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) map.set(str[i], map.get(str[i]) + 1)
        else map.set(str[i], 1)
    }


    let arr = [...new Set([...str].sort((a, b) => map.get(b) - map.get(a)))]
    let sorted = []
    for (let i = 0; i < arr.length; i++) {
        for (let index = 0; index < map.get(arr[i]); index++) {
            sorted.push(arr[i])
        }
    }

    return sorted
};
