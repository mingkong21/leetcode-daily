/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;

    // 1. 求余法
    // 因为等等会修改 x 所以需要拷贝一份
    // let old = x,
    //     now = 0;
    // while (x > 0) {
    //     // 先求余数
    //     let temp = x % 10;
    //     // 赋值给 now , now 的第一位与 s 的最后一位相同，以此类推
    //     // 最后 now 为 s 的反转数
    //     now = now * 10 + temp;
    //     // 减少 x
    //     x = (x - temp) / 10;
    // }
    // return old === now;

    //  2. 位运算，求幂获取数量级找到对应位置，再做比较
    // 使用指数运算符，Math.log10 会返回对应数量级的指数，从而获得最大数量级
    let n = 10 ** Math.floor(Math.log10(x));
    while (n > 1 && x > 0) {
        // 第一位与最后一位不相同，返回 false
        if (Math.floor(x / n) !== x % 10) return false;
        // 相同则继续判断，需同时消去第一位和最后一位
        // 求余最大数量级消去第一位，除以 10 再向下取整消去最后一位
        x = Math.floor((x % n) / 10);
        // n 同样减少两位
        n /= 100;
    }
    // 对比法一的好处：
    // 每一次循环都进行回文的判断，不符合要求的情况会及时退出，达到减少循环的次数的目的
    return true;
};
// @lc code=end
