const partitionLabels = (s) => {
    let map = new Map()
    for (let i = 0; i < s.length; i++) map.set(s[i], i)

    let ans = []
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, map.get(s[i]))
        if (i === end) {
            ans.push(i - start + 1)
            start = i + 1
        }
    }
    return ans
};


console.log(partitionLabels('ababcbacadefegdehijhklij'));