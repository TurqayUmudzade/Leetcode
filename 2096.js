var getDirections = function (root, startValue, destValue) {
    const dfs = (node, value, acc = '') => {
        if (node === null)
            return '';
        if (node.val === value)
            return acc;

        return dfs(node.left, value, acc + 'L') + dfs(node.right, value, acc + 'R')

    }

    // generate the paths
    let startPath = dfs(root, startValue);
    let destPath = dfs(root, destValue);

    // find the lowest common ancestor
    let i = 0;
    for (; i < startPath.length && i < destPath.length && startPath[i] === destPath[i]; i++);

    // output the final path
    let output = '';
    for (let j = i; j < startPath.length; j++) {
        output += 'U';
    }

    return output + destPath.substring(i);
};  