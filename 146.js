class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const v = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, v);
        return this.cache.get(key);
    };

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);

        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {

            this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
        }
    };
}

class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const v = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, v);
        return this.cache.get(key);
    };

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);

        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {

            this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
        }
    };
}


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0;
        this.head = null;
        this.tail = null;
        this.hash = {};
    }

    get(key) {
        if (this.hash[key]) {
            const { value, prev, next } = this.hash[key];
            //delete the connections of this node, get ready to move this node to head
            if (prev) {
                prev.next = next;
            }
            if (next) {
                next.prev = prev || next.prev;
            }
            //if the get value was the next to be removed
            if (this.tail === this.hash[key]) {
                this.tail = prev || this.hash[key];
            }

            //redefine prev
            this.hash[key].prev = null;

            if (this.head !== this.hash[key]) {
                this.hash[key].next = this.head;
                this.head.prev = this.hash[key];
            }
            //redefine head
            this.head = this.hash[key];
            return value;
        }
        return -1;
    }

    put(key, value) {
        //if key already exists
        if (this.hash[key]) {
            this.hash[key].value = value;
            //update most recently used by calling get function
            this.get(key);
        } else {
            //create new node
            this.hash[key] = {
                key: key,
                value: value,
                prev: null,
                next: null
            }
            //if there is a head, update the bindings
            if (this.head) {
                this.hash[key].next = this.head;
                this.head.prev = this.hash[key];
            }
            //redefine head
            this.head = this.hash[key];

            //if no tail, make new head tail
            if (!this.tail) {
                this.tail = this.hash[key];
            }

            this.count += 1;
        }

        if (this.count > this.capacity) {
            let removeKey = this.tail.key;
            //remove tail bindings
            if (this.tail.prev) {
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            }

            //delete this node from hashTable
            delete this.hash[removeKey];
            this.count -= 1;
        }
    }
}

