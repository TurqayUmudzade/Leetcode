/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

const calc = (x,dx) => (10 + x + dx) % 10

var openLock = function(deadends, target) {
   const nogo = new Set(deadends)
   if(nogo.has("0000")) return -1
   nogo.add("0000")

   const q = ["0000"]
   let step = 0

   const dirs = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,-1]]

   while(q.length){
        const len = q.length
        step++
        console.log(q)
        for(let i = 0; i < len; i++){
            const cur = q.shift()
            if(cur == target) return step - 1
            //try combinations
            for(const [da,db,dc,dd] of dirs){
                const [a,b,c,d] = cur.split("").map(c=>Number(c))
                const arr = [[a,da],[b,db],[c,dc],[d,dd]].map((pair)=>{
                    const [x,dx] = pair
                    return calc(x,dx)
                })
                const newCombination = arr.join("")
                if(nogo.has(newCombination)) continue
                nogo.add(newCombination)
                q.push(newCombination)
            }
        }
   }
    
    return -1
};
