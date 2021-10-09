from typing import List


class Solution:
    def maxSubArray(self, arr: List[int]) -> int:
        sum = float("-inf")
        l=0
        for r in range(len(arr)):
            

