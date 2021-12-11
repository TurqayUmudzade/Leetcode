class UndergroundSystem {
    constructor() {
        this.data = new Map()
        this.checkins = new Map()
    }

    checkIn(id, stationName, t) {
        this.checkins.set(id, [stationName, t])
    }


    checkOut(id, stationName, t) {
        let [curName, curTime] = this.checkins.get(id)
        let time = t - curTime
        let key = curName + "/" + stationName
        this.checkins.delete(id)

        if (!this.data.has(key)) this.data.set(key, [time, 1])
        else {
            let [oldSum, oldCount] = this.data.get(key)
            this.data.set(key, [oldSum + time, oldCount + 1])
        }

    }


    getAverageTime(startStation, endStation) {
        let [sum, c] = this.data.get(startStation + "/" + endStation)
        return sum / c
    }
};
