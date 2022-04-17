// https://leetcode-cn.com/problems/binary-search/
function search(nums: number[], target: number): number {
  let firstIndex: number = 0
  let lastIndex: number = nums.length - 1

  while (firstIndex <= lastIndex) {
    const middleIndex: number = Math.floor((lastIndex + firstIndex) / 2)

    if (nums[middleIndex] === target) {
      return middleIndex
    }

    if (nums[middleIndex] > target) {
      lastIndex = middleIndex - 1
    } else if (nums[middleIndex] < target) {
      firstIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1