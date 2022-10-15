class Transaction {
    constructor(index, str) {
        str = str.split(',')
        this.index = index
        this.name = str[0]
        this.time = str[1]
        this.amount = str[2]
        this.city = str[3]
    }

    toString() {
        return `${this.name},${this.time},${this.amount},${this.city}`
    }
}

const invalidTransactions = (transactions) => {
    let db = new Map()

    for (const [index, data] of transactions.entries()) {
        let transaction = new Transaction(index, data)
        if (!db.has(transaction.name)) {
            db.set(transaction.name, [transaction])
        } else {
            db.set(transaction.name, [...db.get(transaction.name), transaction])
        }
    }

    const invalids = new Set()
    for (const [key, val] of db.entries()) {
        let transactionList = val
        for (const newTrans of transactionList) {
            if (newTrans.amount > 1000) invalids.add(newTrans.index)

            for (const prevTrans of transactionList) {
                if (prevTrans.city !== newTrans.city) {
                    const diff = Math.abs(parseInt(prevTrans.time) - parseInt(newTrans.time))
                    if (diff <= 60) {
                        invalids.add(prevTrans.index)
                        invalids.add(newTrans.index)
                    }
                }
            }
        }
    }

    const out = []
    for (const index of invalids.values()) {
        out.push(transactions[index])
    }
    return out
}

let transactions = ["alice,20,800,mtv", "alice,50,100,beijing"]
console.log(invalidTransactions(transactions));