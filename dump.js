var isSymmetric = function (root) {
    if (!root) return true;

    const isSymmetricArr = (arr) => {
        if (arr.length % 2 !== 0) return false;

        for (let i = 1; i < arr.length; i = i + 2) {
            if (arr[i] !== arr[i - 1]) return false;
        }
    };

    let q = [root];
    while (q.length > 0) {
        let level = q.length;
        let temp = [];
        for (let i = 0; i < level; i++) {
            let curr = q.shift();
            temp.push(curr.val);
            if (q.left) q.push(q.left);
            if (q.right) q.push(q.right);
        }
        if (!isSymmetricArr(temp)) return false;
    }
    return true;
};