const removeElement = (arr, val) => {
    let p = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[p++] = arr[i]
        }
    }
    return p
}

console.log(removeElement([1, 0, 2, 0, 3], 0));