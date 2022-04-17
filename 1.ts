// https://leetcode-cn.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  // 用来存放数据
  const map = {}

  for (let i: number = 0; i < nums.length; i++) {
    // 需要找的值
    const diff: number = target - nums[i]

    // 如果需要找的值已经存在
    if (map[diff] !== undefined) {
      return [map[diff], i]
    }

    // 边找边存 以数组的值为键 索引我值进行存储
    map[nums[i]] = i
  }
}

// {
//   2:1,
//   7:2,
//   11,3, 
//   15,4
// }

console.log(twoSum([2, 7, 11, 15], 9)) // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)) // [ 1, 2 ]
console.log(twoSum([3, 3], 6)) // [ 0, 1 ]
