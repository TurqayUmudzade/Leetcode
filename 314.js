var verticalOrder = function (root) {


    function Node(root, level) {
        this.val = root.val
        this.level = level || 0
    }

    let tree = []

    let levelOrder = (root) => {
        if (!root) return []

        let q = [new Node(root)]
        while (q.length > 0) {
            let len = q.length
            let level = []
            for (let i = 0; i < len; i++) {
                let cur = q.shift()
                level.push([cur.val, cur.level])

                if (cur.left) q.push(new Node(cur.left, cur.level - 1))
                if (cur.right) q.push(new Node(cur.left, cur.level + 1))
            }
            tree.push(level)
        }
    }

    levelOrder(root)
    console.log(tree);
};

