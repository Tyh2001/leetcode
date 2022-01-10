/**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return nums.indexOf(target)
}

console.log(search([1, 3, 5, 6], 5))
console.log(search([1, 3, 5, 6], 2))
console.log(search([1, 3, 5, 6], 7))
console.log(search([1, 3, 5, 6], 0))
console.log(search([1], 0))