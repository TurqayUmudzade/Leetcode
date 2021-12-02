class WordDistance {

    constructor(wordsDict) {
        this.arr = wordsDict
    }

    shortest(word1, word2) {
        let min = this.arr.length
        let map = new Map()
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == word1 || this.arr[i] == word2) {
                map.set(this.arr[i], i)
                if (map.has(word1) && map.has(word2))
                    min = Math.min(Math.abs(map.get(word1) - map.get(word2)), min)
            }
        }

        return min
    }
}