class Solution {
  nums
  map
  constructor(nums: number[]) {
    this.map = new Map()

    for (const [index, n] of nums.entries()) {
      const prev = this.map.get(n)
      if (prev) this.map.set(n, [...prev, index])
      else this.map.set(n, [index])
    }
  }

  pick(target: number): number {
    let arr = this.map.get(target)
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }
}

