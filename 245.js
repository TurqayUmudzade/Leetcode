var shortestWordDistance = function (arr, word1, word2) {
    let min = arr.length
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == word1 && word1 == word2 && map.has(arr[i])) {
            min = Math.min(Math.abs(map.get(word1) - i), min)
            map.set(arr[i], i)
        } else if (arr[i] == word1 || arr[i] == word2) {
            map.set(arr[i], i)
            if (map.has(word1) && map.has(word2) && word1 != word2)
                min = Math.min(Math.abs(map.get(word1) - map.get(word2)), min)
        }

    }

    return min
};