/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    const res = []
    const dfs = (index,subset) =>{
        if(index === nums.length){
            res.push([...subset])
            return
        }

        subset.push(nums[index])
        dfs(index+1,subset)

        subset.pop()
        dfs(index+1,subset)
    }

    dfs(0,[])

    return res
};
