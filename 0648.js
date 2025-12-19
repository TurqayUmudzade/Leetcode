const Node = function (x) {
    this.val = x;
    this.children = new Map();
}

var replaceWords = function (dict, sentence) {
    const res = [], head = new Node('');
    for (word of dict) {
        let curr = head;
        for (c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new Node(c));
            }
            curr = curr.children.get(c);
        }
        curr.children.set('.', new Node('.'));
    }
    for (word of sentence.split(' ')) {
        let curr = head, newWord = [];
        for (c of word) {
            if (!curr.children.has(c)) break;
            if (curr.children.has('.')) break;
            newWord.push(c);
            curr = curr.children.get(c);
        }
        if (newWord.length) {
            res.push(curr.children.has('.') ? newWord.join('') : word);
        } else {
            res.push(word);
        }
    }
    return res.join(' ');
};