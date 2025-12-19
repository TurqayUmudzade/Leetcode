let TrieNode = function () {
    this.children = {};
    this.score = 0;
}
class MapSum {

    constructor() {
        this.map = {};
        this.root = new TrieNode();
    }

    insert(key, val) {
        let delta = val - (this.map[key] || 0);
        this.map[key] = val;
        let cur = this.root;
        cur.score += delta;
        for (const c of key) {
            if (!(c in cur.children)) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
            cur.score += delta;
        }
    }

    sum(prefix) {
        let cur = this.root;
        for (const c of prefix) {
            cur = cur.children[c];
            if (!cur) return 0;
        }
        return cur.score;
    }
}

class MapSum {
    constructor() {
        this.map = new Map()
    }

    insert(key, val) {
        this.map.set(key, val)
        return null
    }

    sum(prefix) {
        let n = 0
        for (const [key, val] of this.map.entries()) {
            if (key.startsWith(prefix)) n = n + val
        }
        return n
    }
}