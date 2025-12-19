/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    
    const outDegree = new Array(n+1).fill(0)
    const inDegree = new Array(n+1).fill(0)

    for (const [a,b] of trust){
        outDegree[a]++
        inDegree[b]++
    }
    
    for(let i = 1; i <= n ; i++){
        if(outDegree[i] == 0 && inDegree[i] == n-1) return i
    }
    
    
    return - 1
};
