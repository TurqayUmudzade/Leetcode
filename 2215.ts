function findDifference(nums1: number[], nums2: number[]): number[][] {
  const [ansSet1, ansSet2] = [new Set(nums1), new Set(nums2)]

  return [[...ansSet1].filter((n) => !ansSet2.delete(n)), [...ansSet2]]
}

