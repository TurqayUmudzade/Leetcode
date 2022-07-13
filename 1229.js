var minAvailableDuration = function (slots1, slots2, duration) {
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);

    let p1 = 0;
    let p2 = 0;
    let slot1, slot2;

    while (p1 < slots1.length && p2 < slots2.length) {
        slot1 = slots1[p1];
        slot2 = slots2[p2];

        if (!fitsDuration(slot1, duration)) {
            p1++;
        }
        else if (!fitsDuration(slot2, duration)) {
            p2++;
        }
        else {
            if (slot1[1] < (slot2[0] + duration)) {
                p1++;
            }
            else if (slot2[1] < (slot1[0] + duration)) {
                p2++;
            }
            else {
                const start = Math.max(slot1[0], slot2[0])
                return [start, start + duration];
            }
        }
    }

    return [];
};

function fitsDuration(slot, duration) {
    return (slot[1] - slot[0]) >= duration;
}

let slots1 = [[10, 50], [60, 120], [140, 210]], slots2 = [[0, 15], [60, 70]], duration = 12
console.log(minAvailableDuration(slots1, slots2, duration));