var getDirections = function (root, startValue, destValue) {


    const dfs = (root, val, path) => {
        if (!root) return ""
        if (root.val === val) return path
        return dfs(root.left, val, path + "L") || dfs(root.right, val, path + "R")

    }

    let sPath = dfs(root, startValue, "")
    let dPath = dfs(root, destValue, "")

    let len = Math.min(sPath.length, dPath.length)
    while (len--) {
        if (sPath.charAt(0) === dPath.charAt(0)) {
            sPath.shift()
            dPath.shift()
        } else break
    }

    sPath.replaceAll("*", 'U')
    return sPath + dPath
};

