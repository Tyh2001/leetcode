/**
 * 小的排在大的左边时 都是两位，且都是右边的值减去左边的
 * 如IV(5-1=4)、IX(10-1=9)
 * 非特殊的表示只需要把各字符的值相加，
 */

/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const list = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  const arr = []
  let result = 0

  for (let i = 0; i < s.length; i++) {
    // 字符串的 charAt 方法：https://www.runoob.com/jsref/jsref-charat.html
    // const tmp = list[s.charAt(i)]
    const tmp = list[s[i]]
    if (arr[arr.length - 1] < tmp) {
      result += tmp - arr.pop()
    } else {
      arr.push(tmp)
    }
  }
  const res = arr.reduce((pre, cur) => {
    return pre + cur
  }, 0)
  // console.log(res, result + '--结果')
  return res + result
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4 I = 1；V = 5 所以 5 - 1 = 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58 因为 : L = 50, V= 5, III = 3
console.log(romanToInt('MCMXCIV')) // 1994 因为 : M = 1000, CM = 900, XC = 90, IV = 4

/**
  字符          数值
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
 */
