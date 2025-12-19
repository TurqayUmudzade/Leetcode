function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) continue

    let next = flowerbed[i + 1]
    let prev = flowerbed[i - 1]
    if (!next && !prev) {
      n--
      i++
    }
  }

  return n <= 0
}
