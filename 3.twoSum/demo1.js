/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 存储循环遍历的值 { '数字' : 数字下标 }
  let keys = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    // 判断差值diff在键值对中是否存在 是则找到匹配数字
    let diff = target - num

    // console.log(!isNaN(keys[diff]))
    // if (!isNaN(keys[diff])) {
    //   return [keys[diff], i]
    // }
    if (num in keys) {
      return [keys[num], i]
    }

    // 未出现匹配值 将数字存入键值对中以备后续判断
    // 将需要找的值放在对象中
    keys[diff] = i
    // keys[nums[i]] = i
    // console.log(keys)
    // console.log(diff)
  }
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
// console.log(twoSum([3, 2, 4], 6)) // [1, 2]
// console.log(twoSum([3, 3], 6)) // [0, 1]

/**
7
{ '7': 0 }
2
{ '2': 1, '7': 0 }
-2
{ '2': 1, '7': 0, '-2': 2 }
-6
{ '2': 1, '7': 0, '-2': 2, '-6': 3 }
 */

/**
 * 传入 [2, 7, 11, 15]
 * 结果为 9
 * 
 * keys = {}
 * 
 * 进入循环
 * 
 * ----第一次循环----
 * i = 0
 * num = nums[i] = 2
 * diff = target - num = 9 - 2 = 7
 * 
 * 判断 num 在不再 keys 的键值中？
 * 因为这里 keys 还是空对象，所以往下执行
 * 将 diff 作为对象的键，i 为对象的值，就将一个需要找的数字存储起来了
 * ----第一次循环结束，未找到----
 * 
 * ----第二次循环----
 * i = 1
 * num = nums[i] = 7
 * diff = target - num = 9 - 7 = 2
 * 
 * 判断 num 在不再 keys 的键值中？
 * 因为这里 keys 中山有值的：{ '7': 0 }
 * 判断 if (num in keys) 为真
 * 所以返回 [keys[7]的下标,和当前i的下标]
 * ----第二次循环结束，找到----
 * 
 * 循环两次 直接退出循环 查找完成
 */