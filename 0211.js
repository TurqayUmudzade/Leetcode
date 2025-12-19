class WordDictionary {

    constructor() {
        this.root = {}
    }

    addWord(word) {
        let cur = this.root
        for (const c of word) {
            if (!cur[c]) cur[c] = {}
            cur = cur[c]
        }
        cur.isEnd = true
    }

    dfs = (word, index, node) => {
        if (index == word.length) return node.isEnd == true;

        if (word[index] == '.') {
            for (let key in node) {
                if (this.dfs(word, index + 1, node[key])) return true;
            }

        } else {
            if (node[word[index]]) {
                return this.dfs(word, index + 1, node[word[index]]);
            }
        }
        return false
    }

    search(word) {
        return this.dfs(word, 0, this.root);
    }
}


