var compress = function (chars) {

    let index = 0;
    let prev = chars[0]
    let c = 1
    let len = 0;

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] == prev) { c++ }
        else {
            chars[index++] = prev

            let str = c.toString()
            if (str != 1)
                for (let j = 0; j < str.length; j++) {
                    chars[index++] = str[j];
                    len++
                }
            prev = chars[i]
            c = 1
            len++
        }
    }

    chars[index++] = prev
    let str = c.toString()
    if (str != 1)
        for (let j = 0; j < str.length; j++) {
            chars[index++] = str[j];
            len++
        }
    len++

    return len
};




console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));