const validPalindrome = (s: string): boolean => isPalindrome(s, true)

function isPalindrome(s: string, canDelete: boolean): boolean {
  // loop through the outer characters moving towards the middle
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    // if any character doesn't match
    if (s[left] !== s[right])
      // return false if cant delete or if removing the right or left character will suffice by checking if the remaining substring is a palindrome
      return (
        canDelete &&
        (isPalindrome(s.slice(left + 1, right + 1), false) ||
          isPalindrome(s.slice(left, right), false))
      )
  }
  // if you've made it through the loop, it's a palindrome
  return true
}
