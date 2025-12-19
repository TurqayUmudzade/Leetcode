/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    const ans = []
    const dfs = (index,sum,comb) => {
        if(sum == target){
            ans.push(comb)
        }

        for(let i = index ; i < candidates.length;i++){
            const cur = candidates[i]
            if(sum+cur>target) continue
            dfs(i,sum+cur,[...comb,cur])
        }

    }

    dfs(0,0,[])
    return ans
    
};
