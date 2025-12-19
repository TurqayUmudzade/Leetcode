let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const romanToInt = (s) => {
    let ans = 0
    for (let i = 0; i < s.length; i++)
        map[s[i]] < map[s[i + 1]] ? ans -= map[s[i]] : ans += map[s[i]]

    return ans
}