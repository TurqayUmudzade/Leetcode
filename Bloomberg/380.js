class RandomizedSet {

    constructor() {
        this.map = new Map()
        this.arr = []
    }

    insert(val) {
        if (this.map.has(val)) return false
        this.map.set(val, this.arr.length)
        this.arr.push(val)
        return true
    }

    remove(val) {
        if (!this.map.has(val)) return false
        const index = this.map.get(val)
        this.arr[index] = this.arr[this.arr.length - 1]
        this.arr.pop()
        this.map.set(this.arr[index], index);
        this.map.delete(val)
        return true
    }

    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)]
    }
}