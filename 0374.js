var PriorityQueue = require('priorityqueuejs');


Map.prototype.getOrElse = function (key, value) {
    return this.has(key) ? this.get(key) : value
}
var guessNumber = function (n) {
    let l = 1, r = n;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (guess(mid) == 0) return mid;
        else if (guess(mid) == 1) l = mid + 1;
        else r = mid - 1;
    }
};