class Solution:
    def sortedSquares(self, arr: List[int]) -> List[int]:
        ans = [0] * len(arr)

        l, r = 0, len(arr) - 1
        p = r
        while l <= r:
            if arr[l] ** 2 < arr[r] ** 2:
                ans[p] = arr[r] ** 2
                r = r - 1
            else:
                ans[p] = arr[l] ** 2
                l = l + 1
            p = p - 1
        return ans
