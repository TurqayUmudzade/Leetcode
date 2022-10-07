var maximumWealth = function (accounts) {
    let max = accounts[0][0]
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
        }
        max = Math.max(max, sum)
    }

    return max
};