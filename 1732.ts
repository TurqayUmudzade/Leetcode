function largestAltitude(gain: number[]): number {
  let alt = 0
  let max = 0
  for (const n of gain) {
    alt += n
    max = Math.max(max, alt)
  }
  return max
}

