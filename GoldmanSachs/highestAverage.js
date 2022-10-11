class Node {
    constructor(sum, count) {
        this.sum = sum
        this.count = count
    }
}

const highestAverage = (arr) => {
    let map = new Map()

    for (let [name, grade] of arr) {
        grade = parseInt(grade)
        if (map.has(name)) {
            const oldNode = map.get(name)
            oldNode.sum += grade
            oldNode.count += 1
        } else {
            map.set(name, new Node(grade, 1))
        }
    }

    let max = 0
    for (const [key, node] of map) {
        const { sum, count } = node
        max = Math.max(max, Math.floor(sum / count))
    }
    return max
}


const arr = [["Bob", "87"], ["Mike", "35"], ["Bob", "52"], ["Jason", "35"], ["Mike", "55"], ["Jessica", "99"]]
console.log(highestAverage(arr));