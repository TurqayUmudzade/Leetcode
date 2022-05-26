class QElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        var qElement = new QElement(element, priority)
        var contain = false

        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i].element, qElement.element);
            if (this.items[i].priority === qElement.priority && this.items[i].element > qElement.priority.element) {
                console.log(1);
                this.items.splice(i, 0, qElement)
                contain = true
                break
            }
            else if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement)
                contain = true
                break
            }
        }

        if (!contain) {
            this.items.push(qElement)
        }
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow"
        return this.items.shift()
    }
    rear() {
        if (this.isEmpty()) return "No elements in Queue"
        return this.items[this.items.length - 1]
    }

    front() {
        if (this.isEmpty()) return "No elements in Queue"
        return this.items[0]
    }

    isEmpty() {
        return this.items.length == 0
    }
    printPQueue() {
        var str = ""
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i].element + " "
        return str
    }
}




function getItems(entries) {
    let heap = new PriorityQueue()
    let i = 0;
    let out = []
    for (const arr of entries) {
        let [action, item, price] = arr
        if (action === 'INSERT') {
            heap.enqueue(item, Number(price))
        } else {
            out.push(heap.items[i].element)
            i++
        }

    }
    return out
}

const entries = [
    ['INSERT', 'fries', '4'],
    ['INSERT', 'soda', '2'],
    ['VIEW', '-', '-'],
    ['VIEW', '-', '-'],
    ['INSERT', 'hamburger', '5'],
    ['VIEW', '-', '-'],
    ['INSERT', 'nuggets', '4'],
    ['INSERT', 'cookie', '1'],
    ['VIEW', '-', '-'],
    ['VIEW', '-', '-']
]

console.log(getItems(entries));