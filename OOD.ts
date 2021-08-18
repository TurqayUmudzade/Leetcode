//CARS
enum VehicleType {
    BIKE = 1,
    SEDAN = 2,
    TRUCK = 3,
}

interface Vehicle {
    getSize(): VehicleType;
}

class Bike implements Vehicle {
    #bikeNumber: String;

    constructor(bikeNumber: String) {
        this.#bikeNumber = bikeNumber;
    }

    get bikeNumber() {
        return this.#bikeNumber;
    }

    getSize() {
        return VehicleType.BIKE;
    }
}

class Sedan implements Vehicle {
    #carNumber: String;

    constructor(bikeNumber: String) {
        this.#carNumber = bikeNumber;
    }

    get bikeNumber() {
        return this.#carNumber;
    }

    getSize() {
        return VehicleType.BIKE;
    }
}

class HatchBackCar implements Vehicle {
    #carNumber: String;

    constructor(bikeNumber: String) {
        this.#carNumber = bikeNumber;
    }

    get bikeNumber() {
        return this.#carNumber;
    }

    getSize() {
        return VehicleType.BIKE;
    }
}

enum parkingStatus {
    EMPTY = "Empty",
    OCCUPIED = "Occupied",
}

class ParkingSlot {
    #slotId: Number;
    #slotNumber: String;
    #status: parkingStatus;
    #slotSize: Number;
    #vehicle: Vehicle;

    constructor(slotId, slotNumber, status, slotSize, vehicle) {
        this.#slotId = slotId;
        this.#slotNumber = slotNumber;
        this.#status = status;
        this.#slotSize = slotSize;
        this.#vehicle = vehicle;
    }

    park(vechile: Vehicle) {
        if (this.#slotSize <= vechile.getSize() && this.#status === parkingStatus.EMPTY) {
            this.#status = parkingStatus.OCCUPIED;
            this.#vehicle = vechile;
        } else throw Error("Parking not allowed");
    }

    unpark() {
        this.#vehicle = null;
        this.#status = parkingStatus.EMPTY;
    }
}

class FareController {

    #vehicleParkingDetailsMap = new Map()

    onEntry()
}

let ParkingLot