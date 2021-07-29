function replaceElements(arr) {
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = arr[i];
        arr[i] = max;
        max = Math.max(max, curr);
    }

    return arr;
}