function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0
  let p2 = 0
  let out: number[] = []

  if (!nums2.length) return

  while (p1 < m || p2 < n) {
    if (p1 < m && (p2 >= n || nums1[p1] < nums2[p2])) {
      out.push(nums1[p1])
      p1++
    } else {
      out.push(nums2[p2])
      p2++
    }
  }

  for (let i = 0; i < out.length; i++) {
    const element = out[i]
    nums1[i] = element
  }
}

