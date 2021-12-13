class FindSumPairs {

    constructor(nums1, nums2) {
        this.nums1 = nums1
        this.nums2 = nums2
    };

    add(index, val) {
        this.nums2[index] += val
    };

    count(total) {
        let map = new Map()
        let c = 0
        for (let i = 0; i < this.nums1.length; i++) {
            if (!map.has(this.nums1[i])) map.set(this.nums1[i], 1)
            else map.set(this.nums1[i], map.get(this.nums1[i]) + 1)
        }
        for (let i = 0; i < this.nums2.length; i++) {
            let temp = total - this.nums2[i]
            if (map.has(temp)) c += map.get(temp)
        }
        return c
    }
}