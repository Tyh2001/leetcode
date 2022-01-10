/**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  // while (left <= right) {
  //   const mid = Math.floor((left + right) / 2) + low // 找到中间的索引
  //   if (nums[mid] === target) { // 直接找到
  //     return mid
  //   } else if (nums[mid] > target) { // 向右找
  //     right = mid - 1 // 索引增加
  //   } else if (nums[mid] < target) { // 向左找
  //     left = mid + 1
  //   } else {
  //     return -1
  //   }

  // }
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
// console.log(search([-1, 0, 3, 5, 9, 12], 2))