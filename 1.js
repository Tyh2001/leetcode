// https://leetcode-cn.com/problems/two-sum/
function twoSum(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
}
// {
//   2:1,
//   7:2,
//   11,3, 
//   15,4
// }
console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)); // [ 1, 2 ]
console.log(twoSum([3, 3], 6)); // [ 0, 1 ]
