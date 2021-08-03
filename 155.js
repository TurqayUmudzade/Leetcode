class MinStack {
    constructor() {
        this.arr = []
        this.size = 0
    }

    push(val) {
        if (this.size == 0) { this.arr[this.size] = [val, val] }
        else {
            if (this.arr[this.size - 1][1] > val) {
                this.arr[this.size] = [val, val]
            } else {
                this.arr[this.size] = [val, this.arr[this.size - 1][1]]
            }
        }
        this.size++
    }

    pop() {
        this.arr[this.size] = null
        this.size--
    }

    top() {
        return this.arr[this.size - 1][0]
    }
    getMin() {
        return this.arr[this.size - 1][1]
    }
}