function findKthPositive(arr: number[], k: number): number {
  let index = 0
  let cur = 1
  while (true) {
    if (arr[index] != cur) {
      k--
      if (k == 0) return cur
    } else {
      index++
    }

    cur++
  }
}

