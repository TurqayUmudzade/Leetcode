class Node {
    constructor(val, time) {
        this.val = val
        this.time = time
    }
}

class TimeMap {

    constructor() {
        this.map = new Map()
    }

    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, [new Node(value, timestamp)])
        } else {
            const oldArr = this.map.get(key)
            this.map.set(key, [...oldArr, new Node(value, timestamp),])
        }
    };

    get(key, timestamp) {
        if (!this.map.has(key)) return ''
        const arr = this.map.get(key)
        let l = 0
        let r = arr.length - 1
        let out = ''
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            let cur = arr[mid]
            if (cur.time == timestamp) return cur.val
            else if (cur.time > timestamp) r = mid - 1
            else {
                l = mid + 1
                out = cur.val
            }
        }
        return out
    };
}


let timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
console.log(timeMap.get("foo", 1));       // return "bar"
console.log(timeMap.get("foo", 3));       // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(timeMap.get("foo", 4));        // return "bar2"
console.log(timeMap.get("foo", 5));   // return "bar2"