enum SlotSize {
    Small = 1,
    Medium = 2,
    Large = 3
}

class ParkingLot {
    #slots: Array<Slots>
    #parkingDetails: Array<ParkDetails>
    constructor(slots: Array<Slots>) {
        this.#slots = slots
    }

    get slots() {
        return this.#slots
    }

    park(car: Car) {
        let spots = this.#slots.filter(slot => slot.isFree === true)
        if (spots[0]) {
            spots[0].isFree = false
            this.#parkingDetails.push(new ParkDetails(car.id))
        } else throw Error("Parking Lot Full")
    }

    unpark(car: Car) {

    }
}


class Slots {

    #id: Number
    #size: SlotSize
    isFree: Boolean
    #price: Number
    constructor(id: Number, size: SlotSize, isFree: Boolean) {
        this.#id = id
        this.#size = size
        this.isFree = isFree
    }



    static getPrice(size: SlotSize) {
        switch (size) {
            case SlotSize.Large:
                return 20
            case SlotSize.Medium:
                return 10
            case SlotSize.Small:
                return 5
            default: throw Error()
        }
    }

}


enum carType {
    Bike = 1,
    Sedan = 2,
    Truck = 3
}

class Car {
    #id: Number
    #type: carType

    constructor(id: Number, type: carType) {
        this.#id = id
        this.#type = type
    }

    get id() {
        return this.#id
    }

}

class ParkDetails {
    #carId: Number
    #start: Date
    #end: Date

    constructor(carId) {
        this.#carId = carId
        this.#start = new Date()
    }

}


let car = new Car(1, carType.Bike)
ParkingLot.par
