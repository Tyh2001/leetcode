// https://leetcode-cn.com/problems/palindrome-number/
function isPalindrome(x) {
    // 如果是负数 直接返回 false
    if (x < 0)
        return false;
    var num = x.toString();
    var arr = [];
    for (var i = num.length - 1; i >= 0; i--) {
        arr.push(num[i]);
    }
    return x.toString() === arr.join('');
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
