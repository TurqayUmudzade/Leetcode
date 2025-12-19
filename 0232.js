class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }


    push(x) {
        this.stack1.push(x)
    }

    pop() {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }

        var pop = this.stack2.pop()

        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop())
        }
    }

    peek() {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }

        var pop = this.stack2.pop()
        this.stack2.push(pop)
        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop())
        }

        return pop
    }

    empty() {
        return this.stack1.length === 0
    }
}