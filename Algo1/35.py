class Solution:
    def searchInsert(self, nums, target) -> int:
        l, r = 0, len(nums)
        while l <= r:
            mid = (l+r) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                l = mid+1
            else:
                r = mid-1
        return r+1
