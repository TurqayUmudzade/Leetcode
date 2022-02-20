var memLeak = function (memory1, memory2) {
    let i = 1;
    for (; i < memory1 + memory2; i++) {
        if (memory1 >= memory2) {
            if (memory1 < i) break
            memory1 -= i
        } else {
            if (memory2 < i) break
            memory2 -= i
        }

    }
    return [i, memory1, memory2]
};