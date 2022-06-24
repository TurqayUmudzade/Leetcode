var checkInclusion = function (s1, s2) {
    let m = new Map();
    for (let i = 0; i < s1.length; i++) {
        m.set(s1[i], m.get(s1[i]) + 1 || 1);
    }

    let start = 0, windowSize = s1.length;
    let counter = m.size;

    for (let end = 0; end < s2.length; end++) {
        let char = s2[end];
        if (m.has(char)) m.set(char, m.get(char) - 1);
        if (m.get(char) === 0) counter--;
        while (counter === 0) {
            if (end - start + 1 === windowSize) return true;
            if (m.has(s2[start])) m.set(s2[start], m.get(s2[start]) + 1);
            if (m.get(s2[start]) === 1) counter++;
            start++;
        }
    }
    return false;
};