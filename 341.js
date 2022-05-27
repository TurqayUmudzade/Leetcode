class NestedIterator {
    constructor(nestedList) {
        this.list = this.flatenList(nestedList)
        console.log(this.list);
        this.i = 0
    }


    hasNext() {
        if (this.list[this.i]) return true; else return false
    }

    next() {
        return this.list[this.i++]
    }


    flatenList = (list) => {
        const out = []

        const dfs = (list, i) => {
            if (list[i] === undefined) return 0
            if (!Array.isArray(list[i])) out.push(list[i])
            else dfs(list[i], 0)
            dfs(list, i + 1)
        }

        dfs(list, 0)
        return out
    }
}



// function test(nestedList) {
//     let t = new NestedIterator(nestedList)
//     let res = []
//     while (t.hasNext())
//         res.push(t.next())
//     return res
// }

// console.log(test([[1, 1], 2, [1, 1]]));