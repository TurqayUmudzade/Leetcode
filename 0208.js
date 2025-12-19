
class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) node[c] = {};
            node = node[c];
        }
        node.hasEnded = true;
    }

    search(word) {
        let cur = this.root
        for (const c of word) {
            if (!cur[c]) return false
            cur = cur[c]
        }
        return cur.hasEnded
    }

    startsWith(prefix) {
        let cur = this.root
        for (const c of word) {
            if (!cur[c]) return false
            cur = cur[c]
        }
        return true
    }
}


let trie = new Trie()
trie.insert('apple')

console.log(trie.root);