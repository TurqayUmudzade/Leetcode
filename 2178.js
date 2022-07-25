var maximumEvenSplit = function (finalSum) {

    if (finalSum % 2 !== 0) { return [] }

    let prev = 0
    let sum = 0
    let ans = []
    let diff = 0
    let i = 0
    while (true) {
        prev += 2
        sum += prev
        i++
        ans.push(prev)
        if (sum >= finalSum) {
            diff = sum - finalSum
            break
        }
    }
    if (diff !== 0) {
        let index = (diff / 2) - 1
        ans.splice(index, 1)
    }
    return ans
};