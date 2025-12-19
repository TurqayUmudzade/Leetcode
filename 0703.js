var KthLargest = function (k, nums) {
    this.k = k;
    this.pq = new MinPriorityQueue();

    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.pq.size() < this.k) {
        this.pq.enqueue(val);
        return this.pq.front().priority;
    }

    const minElement = this.pq.front().priority;
    if (val > minElement) {
        this.pq.dequeue();
        this.pq.enqueue(val);
    }

    return this.pq.front().priority;
};