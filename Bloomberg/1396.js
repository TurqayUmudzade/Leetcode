class Node {
    constructor(station, time) {
        this.station = station
        this.time = time
    }
}

class Trip {
    constructor(sum, count) {
        this.sum = sum
        this.count = count
    }
}

class UndergroundSystem {


    constructor() {
        this.data = new Map()
        this.checkins = new Map()
    }

    checkIn(id, stationName, t) {
        this.checkins.set(id, new Node(stationName, t))
    }


    checkOut(id, endStation, endTime) {
        const { station, time } = this.checkins.get(id)
        const route = `${station}|${endStation}`
        const routeTime = endTime - time

        if (!this.data.has(route)) {
            this.data.set(route, new Trip(routeTime, 1))
        } else {
            let trip = this.data.get(route)
            trip.sum += routeTime
            trip.count += 1
            this.data.set(route, trip)
        }

    }


    getAverageTime(startStation, endStation) {
        const route = `${startStation}|${endStation}`
        const { sum, count } = this.data.get(route)
        return sum / count
    }
};