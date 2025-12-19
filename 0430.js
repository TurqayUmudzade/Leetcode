
function flatten(head) {
    const arr = []

    const dfs = (node) => {
        if (!node) return
        arr.push(node)
        dfs(node.child)
        dfs(node.next)
    }

    dfs(head)

    for (let i = 0; i < arr.length; i++) {
        arr[i].next = arr[i + 1] || null
        arr[i].prev = arr[i - 1] || null
        arr[i].child = null
    }

    return arr[0] || null

}