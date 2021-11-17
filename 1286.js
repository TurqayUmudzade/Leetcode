//! UNFINISHED
class CombinationIterator {
    constructor(str, len) {
        this.combinations = this.getAllCombinations(str, len)
        this.index = 0
    }

    getAllCombinations(chars, len) {
        let ans = []
        const helper = (str, curAt) => {
            if (str.length == len) {
                ans.push(str)
                return
            }
            for (let i = curAt; i < chars.length; i++) {
                helper(str + chars[i], curAt + i + 1);
            }

        }
        helper("", 0)
        return ans
    }

    next() {
        this.index++
        return this.combinations[this.index - 1]

    }

    hasNext() {
        return this.index < this.combinations.length
    }

}