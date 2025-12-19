class Node {
    constructor(start, end) {
        this.start = start
        this.end = end
        this.left = this.right = null
    }

    insert(node) {
        if (node.start >= this.end) {
            if (!this.right) {
                this.right = node
                return true
            }
            return this.right.insert(node)
        }
        else if (node.end <= this.start) {
            if (!this.left) {
                this.left = node
                return true
            }
            return this.left.insert(node)
        }
        else
            return false
    }
}

class MyCalendar {

    constructor() {
        this.root = null
    }

    book(start, end) {
        if (!this.root) {
            this.root = new Node(start, end)
            return true
        }
        return this.root.insert(new Node(start, end))
    }
}