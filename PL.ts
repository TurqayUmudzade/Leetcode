enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

class Slot {
    #id: Number
    #size: Size
    #isFree: Boolean

    constructor(id, size, isFree) {
        this.#id = id
        this.#size = size
        this.#isFree = isFree
    }

    get id() {
        return this.#id
    }

    get isFree() {
        return this.#isFree
    }

    set isFree(isFree: Boolean) {
        this.#isFree = isFree
    }

    get size() {
        return this.#size
    }
}

interface IParkingLotDataAccess {
    getAllAvailable(size: Size): Array<Slot>
    UpdateSlot(slotId: Number, available: Boolean)
}

class ParkingLotDataAccess implements IParkingLotDataAccess {
    #slots: Array<Slot> = [
        new Slot(1, Size.Small, true),
        new Slot(2, Size.Small, true),
        new Slot(3, Size.Medium, true),
        new Slot(4, Size.Medium, true),
        new Slot(5, Size.Large, true),
        new Slot(6, Size.Large, true)
    ]

    getAllAvailable(size: Size) {
        return this.#slots.filter(slot => slot.isFree && slot.size)
    }

    UpdateSlot(slotId: Number, available: Boolean) {
        return this.#slots.find(slot => slot.id === slotId).isFree = available
    }
}