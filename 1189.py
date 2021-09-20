class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        dict = {}
        for i in text:
            if i in dict:
                dict[i] = dict[i] + 1
            else:
                dict[i] = 1

        ans = float("inf")
        for key in dict:
            ans = min(dict[key], ans)
        return ans
