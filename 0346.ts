class MovingAverage {
  size: number
  data: number[]
  index: number
  constructor(size: number) {
    this.data = []
    this.size = size
    this.index = this.size - 1
  }

  next(val: number): number {
    //handle pushing
    if (this.data.length > this.size) {
      this.data.push(val)
    } else {
      this.index = this.index % this.size
      this.data[this.index] = val
      this.index++
    }

    //handle sum
    let sum = 0
    for (const item of this.data) {
      sum = sum + item
    }
    return sum / this.data.length
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
