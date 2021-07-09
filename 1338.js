var minSetSize = function (arr) {

    arr.sort((a, b) => a - b)

    let counts = []
    let counter = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            counter++
        } else {
            counts.push(counter)
            counter = 1
        }
    }
    counts.sort((a, b) => b - a)

    let len = arr.length
    counter = 0
    while (len > arr.length / 2) {
        len -= counts[counter]
        counter++
    }

    return counter
};


minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])