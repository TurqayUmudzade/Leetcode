class Solution {

    constructor(arr) {
        this.arr = arr
    }

    reset() {
        return this.arr
    }

    shuffle() {
        let array = this.arr.slice()
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
}