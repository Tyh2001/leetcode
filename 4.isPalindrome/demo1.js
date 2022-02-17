/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = new String(x).split('')
  const res = []
  for (let i = 0; i < str.length; i++) {
    res[i] = str[str.length - 1 - i]
  }
  return res.join('') == x
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
