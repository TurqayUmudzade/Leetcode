class ParkingSystem {

    constructor(big, medium, small) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    addCar(carType) {
        switch (carType) {
            case 3:
                if (this.small > 0) {
                    this.small--
                    return true
                } else return false
            case 2:
                if (this.medium > 0) {
                    this.medium--
                    return true
                } else return false
            case 1:
                if (this.big > 0) {
                    this.big--
                    return true
                } else return false
        }
    }
}