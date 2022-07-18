var canVisitAllRooms = function (rooms) {
    let arr = Array.from({ length: rooms.length }, () => false)

    for (let i = 0; i < rooms.length; i++) {
        for (const key of rooms[i]) {
            if (key != i)
                arr[key] = true
        }
    }

    return !arr.includes(false)
};


let rooms = [[1, 3], [3, 0, 1], [2], [0]]

console.log(canVisitAllRooms(rooms));