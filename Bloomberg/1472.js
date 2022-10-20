class BrowserHistory {

    constructor(homepage) {
        this.arr = [homepage]
        this.cur = 0
    }


    visit(url) {
        if (this.cur !== this.arr.length - 1) this.arr.splice(this.cur + 1)
        this.arr.push(url)
        this.cur++


    };

    back(steps) {
        let index = this.cur - steps
        if (index < 0) this.cur = 0
        else this.cur = index
        return this.arr[this.cur]
    };

    forward(steps) {
        let index = this.cur + steps
        if (index > this.arr.length - 1) this.cur = this.arr.length - 1
        else this.cur = index
        return this.arr[this.cur]
    }
}

