class UndergroundSystem {
    constructor() {
        this.data = new Map()
        this.checkins = new Map()
    }

    checkIn(id, stationName, t) {
        this.checkins.set(id, [stationName, t])
    }


    checkOut(id, stationName, t) {
        let temp = this.checkins.get(id)
        let time = t - temp[1]
        temp = temp[0] + stationName
        this.checkins.delete(id)
        if (!this.data.has(temp))
            this.data.set(temp, [time, 1])
        else this.data.set(temp, [this.data.get(temp)[0] + time, this.data.get(temp)[1] + 1])

    }


    getAverageTime(startStation, endStation) {
        console.log(this.data.get(startStation + endStation));
        let [sum, c] = this.data.get(startStation + endStation)
        return sum / c
    }
};

let undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12