/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num < target) {
      result.push(i)
    }

    // if (result.length) {
    //   for (let j = 0; j < result.length; j++) {
    //     if (result[j] + num <= target) {
    //       result.push(i)
    //       break
    //     }
    //   }
    // }
  }

  return result
};

console.log(twoSum([2, 7, 11, 15], 9))