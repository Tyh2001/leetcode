/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let firstIndex = 0,
    lastIndex = nums.length - 1,
    res = nums.length

  while (firstIndex <= lastIndex) {
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2)
    if (nums[middleIndex] === target) {
      return middleIndex
    } else if (nums[middleIndex] > target) {
      res = middleIndex
      lastIndex = middleIndex - 1
    } else {
      firstIndex = middleIndex + 1
    }
  }
  return res
}

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0
console.log(searchInsert([1], 0)) // 0
