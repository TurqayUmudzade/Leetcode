var canReach = function (arr, start) {

    function callDFS(idx) {
        if (arr[idx] === 'seen' || idx < 0 || idx >= arr.length) return false;
        if (!arr[idx]) return true;
        const move = arr[idx]; arr[idx] = 'seen';
        return callDFS(idx - move) || callDFS(idx + move);
    }
    return callDFS(start);
};