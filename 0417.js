/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {

    const m = heights.length
    const n = heights[0].length

    const dirs = [[0,1],[0,-1],[1,0],[-1,0]]
    const cells = []

    let isPacific = false
    let isAtlantic = false
    const seen = new Set()

    const dfs = (y,x) =>{

        
        for(const [dy,dx] of dirs){
            const newY = dy + y
            const newX = dx + x
            if(newX < 0 || newY < 0) {
                isPacific = true
                continue
            }
            if(newY >= m || newX >= n){
                isAtlantic = true
                continue
            }
            if(heights[newY][newX] > heights[y][x]) continue
            if(seen.has(newY + "," + newX)) continue
            seen.add(newY + "," + newX)
            dfs(newY,newX)
        }
    }

    for(let y = 0 ; y < m ; y++){
        for(let x = 0; x < n ; x++){
            isPacific = false
            isAtlantic = false
            seen.clear()
            dfs(y,x)
            if(isPacific && isAtlantic) cells.push([y,x])
        }
    }
    
    return cells
};
