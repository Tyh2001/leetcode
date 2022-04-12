{
  /**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
  var search = function (nums: number[], target: number): number {
    let fistIndex: number = 0
    let lastIndex: number = nums.length - 1

    while (fistIndex <= lastIndex) {
      const middleIndex: number = Math.floor((lastIndex - fistIndex) / 2)
      if (nums[middleIndex] === target) {
        return middleIndex
      }
      if (nums[middleIndex] > target) {
        lastIndex = middleIndex - 1
      } else if (nums[middleIndex] < target) {
        fistIndex = middleIndex + 1
      } else {
        return -1
      }
    }
  }


  console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
  console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1

}