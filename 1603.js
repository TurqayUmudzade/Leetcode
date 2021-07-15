/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.map = new Map()
    this.map.set(1, big)
    this.map.set(2, medium)
    this.map.set(3, small)
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (!carType) return false
    if (carType < 0 || carType > 3) return false
    let spaceAvaliable = this.map.get(carType)
    if (spaceAvaliable > 0) {
        this.map.set(carType, spaceAvaliable - 1)
        return true
    } else return false
};


var obj = new ParkingSystem(1, 1, 0)
var param_1 = obj.addCar(1)
