class MinStack {
    constructor() {
        this.arr = []
        this.size = 0
    }

    push(val) {
        if (this.size === 0) this.arr.push([val, val])// if stack empty we have no prev min val
        else this.arr.push([val, Math.min(val, this.arr[this.size - 1][1])])
        this.size++
    }

    pop() {
        this.arr.pop()
        this.size--
    }

    top() {
        return this.arr[this.size - 1][0]
    }
    getMin() {
        return this.arr[this.size - 1][1]
    }
}