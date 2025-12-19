var reorderLogFiles = function (logs) {
    let ll = [];
    let dl = [];
    for (let val of logs) {
        let va = val.split(' ')[1];
        if (isNaN(Number(va))) {
            ll.push(val);
        } else {
            dl.push(val);
        }
    }
    dl.sort((a, b) => {
        let aa = a.split(' ');
        let a1 = aa.slice(0, 1);
        let a2 = aa.slice(1,).join(' ');
        let bb = b.split(' ');
        let b1 = bb.slice(0, 1);
        let b2 = bb.slice(1,).join(' ');
        if (a2 < b2) return a - b;
        else if (a2 > b2) return b - a;
        else {
            if (a1 < b1) return a - b;
            else if (a1 > b1) return b - a;
        }
    })
    ll.sort((a, b) => {
        let aa = a.split(' ');
        let a1 = aa.slice(0, 1);
        let a2 = aa.slice(1,).join(' ');
        let bb = b.split(' ');
        let b1 = bb.slice(0, 1);
        let b2 = bb.slice(1,).join(' ');
        if (a2 < b2) return -1;
        else if (a2 > b2) return 1;
        else {
            if (a1 < b1) return -1;
            else if (a1 > b1) return 1;
            else return 0;
        }
    })
    return [...ll, ...dl]
};
