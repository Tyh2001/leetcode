/**
 * https://leetcode-cn.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = false
  digits[digits.length - 1]++

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) {
      digits[i]++
    }
    carry = digits[i] > 9
    digits[i] %= 10
  }
  if (carry) digits.unshift(1)
  return digits
}

/**
 * 9 + 1 = 10
 * 
 * i = 1
 * [9,10][1] = 10 > 9 所以 carry = true
 * 10 % 10 = 0
 * 
 * i = 0
 * 第一位加一
 * [10,0] = 10 > 9 所以 carry = true
 * 10 % 10 = 0
 * 
 * 循环结束结果为： [0,0]，但是 carry = true
 * 所以执行 digits.unshift(1) 在数组前面 +1
 * 
 * 
 */

// console.log(plusOne([1, 2, 3])) // [1,2,4]
// console.log(plusOne([4, 3, 2, 1])) // [4,3,2,2]
// console.log(plusOne([0])) // [1]
console.log(plusOne([9, 9])) // [1,0]
// console.log(plusOne([9, 9, 9]))
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// console.log(plusOne([9]))
// console.log(plusOne([8, 9, 9, 9]))
