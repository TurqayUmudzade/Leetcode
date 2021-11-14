var sortedArrayToBST = function (nums) {
    if (nums == null || !nums.length) {
        return null;
    }

    let mid = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
    return node;
};


//TreeNode
var sortedArrayToBST = function (arr) {

    function helper(root, mid) {
        if (mid < 0 || mid > arr.length - 1) return
        root = arr[mid]
        root.left = helper(root.left, mid - 1)
        root.right = helper(root.right, mid + 1)
    }
    let mid = arr.length / 2 | 0
    let root = new TreeNode(arr[mid])
    helper(root.left, mid - 1)
    helper(root.right, mid + 1)

    return root
};

