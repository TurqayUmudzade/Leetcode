let nums = [4, -2, -3, 4, 1]

const getCombinations = (nums) => {
    let out = []
    for (let len = 2; len <= nums.length; len++) {
        let temp = []
        for (let i = 0; i < nums.length; i++) {
            temp.push(nums[i])
            if (temp.length == len) {
                out.push([...temp])
                temp.shift()
            }

        }
    }
    return out
}

var subArrayRanges = function (nums) {
    let combs = getCombinations(nums)
    console.log(combs);
    let sum = 0
    for (const arr of combs) {
        sum += Math.max(...arr) - Math.min(...arr)
    }
    return sum
};

console.log(subArrayRanges(nums));
