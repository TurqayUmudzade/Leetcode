var permute = function (nums) {
    let ans = [];
    dfs(nums, [], Array(nums.length).fill(false), ans);
    return ans;
}


function dfs(nums, path, used, ans) {
    if (path.length == nums.length) {
        // make a deep copy since otherwise we'd be append the same list over and over
        ans.push(Array.from(path));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        // skip used letters
        if (used[i]) continue;
        // add letter to permutation, mark letter as used
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, path, used, ans);
        // remove letter from permutation, mark letter as unused
        path.pop();
        used[i] = false;
    }
}