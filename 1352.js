class ProductOfNumbers {
    constructor() {
        this.stream = [1];
    }

    add(num) {
        if (!num) this.stream = [1]
        else this.stream.push(this.stream[this.stream.length - 1] * num)
    }

    getProduct(k) {
        const size = this.stream.length;
        if (k >= size) return 0;
        return this.stream[size - 1] / this.stream[size - k - 1]
    }
}