class BrowserHistory {

    constructor(homepage) {
        this.arr = [homepage]
        this.pointer = 0
    }

    visit(url) {
        this.pointer++
        this.arr.splice(this.pointer)
        this.arr.push(url)
    }

    back(steps) {
        if (this.pointer >= steps) this.pointer -= steps
        else this.pointer = 0
        return this.arr[this.pointer]
    }

    forward(steps) {
        this.pointer += + steps
        if (this.pointer + 1 > this.arr.length) this.pointer = this.arr.length - 1
        return this.arr[this.pointer]
    }
}