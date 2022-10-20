var invalidTransactions = function (transactions) {
    let ans = []
    let map = new Map()
    for (let i = 0; i < transactions.length; i++) {

        let [username, time, amount, city] = transactions[i].split(",")
        let node = new Node(username, time, amount, city)

        if (node.amount > 1000) {
            ans.push(transactions[i])
            continue
        }
        if (!map.has(username)) {
            map.set(username, node)
            continue
        }

        let temp = map.get(username)
        if (node.time - temp.time <= 60 && node.city !== temp.city) {
            ans.push(stringify(temp))
            ans.push(transactions[i])
        }
        map.set(username, node)

    }

    return ans
};

class Node {

    constructor(username, time, amount, city) {
        this.username = username
        this.time = parseInt(time)
        this.amount = parseInt(amount)
        this.city = city
    }

}

function stringify(node) {
    return `${node.username},${node.time},${node.amount},${node.city}`
}

console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,100,beijing"]));

class Transaction {
    constructor([name, time, amount, city]) {
        this.name = name;
        this.time = time;
        this.amount = amount;
        this.city = city;
    }
}
var invalidTransactions = function (transactions) {
    const invalidTxnsList = [],
        invalidTxnsIndexes = new Set(),
        transactionMap = new Map(),
        maxAmount = 1000,
        minTimeGap = 60;

    transactions.forEach((txn, tIdx) => {
        const transaction = new Transaction(txn.split(','));
        if (!transactionMap.has(transaction.name)) {
            transactionMap.set(transaction.name, []);
        }
        if (transaction.amount > maxAmount) {
            invalidTxnsIndexes.add(tIdx);
        }
        const prevTransactions = transactionMap.get(transaction.name);
        prevTransactions.forEach(prevTxnIdx => {
            const prevTxn = new Transaction(transactions[prevTxnIdx].split(','));
            if (prevTxn.city !== transaction.city &&
                Math.abs(parseInt(prevTxn.time) - parseInt(transaction.time)) <= minTimeGap
            ) {
                invalidTxnsIndexes.add(tIdx);
                invalidTxnsIndexes.add(prevTxnIdx);
            }
        })
        prevTransactions.push(tIdx);
        transactionMap.set(transaction.name, prevTransactions);
    })
    invalidTxnsIndexes.forEach(idx => invalidTxnsList.push(transactions[idx]));
    return invalidTxnsList;
};