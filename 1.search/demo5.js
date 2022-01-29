/**
 * 二分查找
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 有序数组
 * 
 * 1. 找到中间的索引值 5 
 * 2. 和中间的数字比需要找的数字
 * 
 * [1, 2, 3, 4] 5 [6, 7, 8, 9, 10] 
 * 
 * [6, 7, 8, 9, 10] 
 * 
 * [6, 7] 8 [9, 10]
 * 
 * [6, 7]
 * 
 * [6] [7]
 * 
 * 
 * @param {array} arr 
 * @param {number} num 
 */
const search = function (arr, num) {
  let firstIndex = 0, lastIndex = arr.length - 1

  while (firstIndex <= lastIndex) {
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2)

    if (arr[middleIndex] === num) {
      return middleIndex

      // 如果要找的数组比中间的索引值数字小
      // 那么就想数组的左查找
      // 向左侧查找就要舍去右半部分
    } else if (arr[middleIndex] > num) {
      lastIndex = middleIndex - 1
    } else if (arr[middleIndex] < num) {
      firstIndex = middleIndex + 1
    }
  }

  // 没有找的数字的时候
  return -1
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(search(array, 7))
console.log(search(array, 10))
console.log(search(array, 0))