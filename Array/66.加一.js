/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // let len = digits.length - 1;
    // let carry = false;
    // digits[len]++;
    // for (let i = len; i >= 0; i--) {
    //     if (carry) {
    //         digits[i]++;
    //         carry = false;
    //     }
    //     if (digits[i] >= 10) {
    //         digits[i] %= 10;
    //         carry = true;
    //         // 如果到最前面了，依然要进位，就添加一个1元素
    //         if (i === 0)
    //             digits.unshift(1)
    //     }
    // }
    // return digits;

    let num = BigInt(digits.join(''));
    let string = String(num + 1n);
    let arr = string.split('');
    return arr.map(item => Number(item));
};
// @lc code=end