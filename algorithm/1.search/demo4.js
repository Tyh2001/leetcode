/**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return search_interval(nums, target, 0, nums.length - 1)
}

/**
 * 
 * @param {array} arr 原数组
 * @param {num} target 要查找的字符
 * @param {num} firstIndex 第一个索引
 * @param {num} lastIndex 最后索引
 */
function search_interval (arr, target, firstIndex, lastIndex) {
  // 证明没找到
  if (firstIndex > lastIndex) return -1;

  // 中间的索引
  const middleIndex = Math.floor((firstIndex + lastIndex) / 2)

  // 通过中间找到了
  if (arr[middleIndex] === target) return middleIndex

  // 向右找
  if (arr[middleIndex] > target) {
    return search_interval(arr, target, firstIndex, middleIndex - 1)

    // 向左找
  } else if (arr[middleIndex] < target) {
    return search_interval(arr, target, firstIndex + 1, lastIndex)
  }
}


console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
