/**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let firstIndex = 0,  // 获取第一位的索引
    lastIndex = nums.length - 1 // 获取最后一位的索引

  while (firstIndex <= lastIndex) {
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2) // 获取中间的索引

    // 找到直接返回
    if (nums[middleIndex] === target) {
      return middleIndex

      // 如果中间值大于需要找到的值 说明要找的值在中间值的左侧
      // 就需要将最后一位的索引改为 middleIndex - 1
    } else if (nums[middleIndex] > target) {
      lastIndex = middleIndex - 1

      // 如果中间值小于需要找到的值 说明要找的值在中间值的右侧
      // 就需要将第一位的索引改为 middleIndex + 1
    } else {
      firstIndex = middleIndex + 1
    }

  }

  // 找不到则返回 -1
  return -1
}


console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
