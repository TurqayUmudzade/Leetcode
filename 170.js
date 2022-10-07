class TwoSum {

    constructor() {
        this.arr = []
    }

    add(number) {
        this.arr.push(number)
    }

    find(target) {
        let map = new Map()
        let nums = this.arr
        for (let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) return true
            else map.set(nums[i], i);
        }
        return false
    }
}
