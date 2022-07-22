var canReach = function (arr, start) {

    function callDFS(idx) {
        if (arr[idx] === 'seen' || idx < 0 || idx >= arr.length) return false;
        if (!arr[idx]) return true;
        const move = arr[idx]; arr[idx] = 'seen';
        return callDFS(idx - move) || callDFS(idx + move);
    }
    return callDFS(start);
};


var canReach = function (arr, start) {

    let q = [start]
    let seen = new Set()
    while (q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            if (seen.has(cur)) continue
            seen.add(cur)
            if (arr[cur] === 0) return true

            let left = cur - arr[cur]
            let right = cur + arr[cur]
            if (left > 0) q.push(left)
            if (right < arr.length) q.push(right)

        }
    }
    return false
};