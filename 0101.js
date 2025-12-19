const isSymmetric = (root) => {
    if (root == null) return true;
    return symmetryChecker(root.left, root.right);
};

const symmetryChecker = (left, right) => {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    if (left.val !== right.val) return false;
    return symmetryChecker(left.left, right.right) && symmetryChecker(left.right, right.left);
}



const isSymmetric = (root) => {
    if (root == null) return true;

    let q = [root, root]

    while (q.length > 0) {
        let node1 = q.shift()
        let node2 = q.shift()
        if (!node1 && !node2) continue
        if (!node1 || !node2) return false
        if (node1.val !== node2.val) return false;
        q.push(node1.left, node2.right)
        q.push(node2.left, node1.right)
    }

    return true
}

