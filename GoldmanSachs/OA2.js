function lotteryCoupons(n) {

    let map = new Map()
    let c = 0
    let lottery = Array.from({ length: n }, (_, i) => i + 1)
    for (let i of lottery) {


        let s = 0
        while (i > 0) {
            let r = i % 10
            s += r
            i = Math.floor(i / 10)
        }

        if (!map.has(s))
            map.set(s, 1)
        else
            map.set(s, map.get(s) + 1)
    }

    let m = Math.max(...map.values())
    for (const [i, j] of map.entries()) {
        if (j == m)
            c += 1
    }
    return c
}

console.log(lotteryCoupons(3));