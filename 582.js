var killProcess = function (pid, ppid, kill) {
    let map = new Map()

    for (let i = 0; i < pid.length; i++) {
        if (!map.has(ppid[i])) map.set(ppid[i], []);
        map.get(ppid[i]).push(pid[i]);
    }

    let ans = [kill]

    function traverse(id) {
        let child = map.get(id)
        if (!child) return
        ans = [...ans, ...child]
        for (const id of child) {
            traverse(id)
        }

    }

    traverse(kill)

    return ans
};

