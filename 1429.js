class FirstUnique {
    constructor(nums) {
        this.set = new Set()
        this.previouslyDeleted = new Set()
        for (let q of nums) this.add(q)
    }

    showFirstUnique() {
        for (let s of this.set) return s
        return -1
    }

    add(val) {
        if (this.set.has(val)) {
            this.set.delete(val)
            this.previouslyDeleted.add(val)
        } else if (!this.previouslyDeleted.has(val))
            this.set.add(val)
    }
}