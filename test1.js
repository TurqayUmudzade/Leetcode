const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
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


const getMinCompare = (a, b) => {
    // if (Number(a.price) === Number(b.price))
    //     return a.item - b.item
    // else return Number(a.price) - Number(b.price)
    console.log(a.price, b.price);
    return Number(a.price) < Number(b.price)
};

function getItems(entries) {
    let heap = new PriorityQueue(getMinCompare)
    let i = 0;
    let out = []
    for (const arr of entries) {
        // console.log(heap._heap);
        let [action, item, price] = arr
        let obj = { item, price }
        if (action === 'INSERT') {
            heap.push(obj)
        } else {
            out.push(heap._heap[i].item)
            // console.log(heap._heap);
            i++
        }
    }
    console.log(heap._heap);
    return out
}
console.log(getItems(entries));