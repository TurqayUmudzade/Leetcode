function findKthLargest(nums: number[], k: number): number {
  const quickSelect = (arr: number[], k: number): number => {
    const pivot = arr[Math.floor(Math.random() * arr.length)]
    const left: number[] = []
    const mid: number[] = []
    const right: number[] = []

    for (const num of arr) {
      if (num > pivot) left.push(num)
      else if (num < pivot) right.push(num)
      else mid.push(num)
    }

    if (k <= left.length) return quickSelect(left, k)

    if (left.length + mid.length < k)
      return quickSelect(right, k - left.length - mid.length)

    return pivot
  }

  return quickSelect(nums, k)
}

