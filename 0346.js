class MovingAverage {

    constructor(size) {
        this.arr = []
        this.size = size
    }


    next(val) {
        this.arr.push(val)
        let sum = 0
        let i = this.arr.length > this.size ? this.arr.length - 1 - this.size : 0
        for (; i < this.arr.length; i++) sum += this.arr[i]
        let t = i > this.size ? this.size : i
        return sum / t
    }
}

