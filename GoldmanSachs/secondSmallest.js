const secondSmallest = (arr) => {

    if (arr.length === 2) return Math.max(arr[0], arr[1])

    let smallest, secondSmallest
    if (arr[0] < arr[1]) {
        smallest = arr[0]
        secondSmallest = arr[1]
    } else {
        smallest = arr[1]
        secondSmallest = arr[0]
    }


    for (let i = 1; i < arr.length; i++) {
        const cur = arr[i];
        if (cur < smallest) {
            secondSmallest = smallest
            smallest = cur
        } else if (cur < secondSmallest && cur != smallest) {
            secondSmallest = cur
        }

    }

    return [smallest, secondSmallest]
}


const arr = [5, 3, 2, 1, 39, 44, -23, -23, -19]
console.log(secondSmallest(arr));