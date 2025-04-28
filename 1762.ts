function findBuildings(heights: number[]): number[] {
  const out: number[] = []
  let max = 0
  for (let i = heights.length - 1; i >= 0; i--) {
    const h = heights[i]
    if (max < h) {
      out.push(i)
    }
    max = Math.max(max, heights[i])
  }

  return out.reverse()
}

