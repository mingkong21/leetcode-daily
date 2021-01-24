/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 1. 求余法
    // 去掉符号，判断结果时再加上
    // let old = Math.abs(x);
    // let now = 0;
    // while (old > 0) {
    //     // 求余，使得 now 的第一位等于 old 的最后一位
    //     now = now * 10 + (old % 10);
    //     // 向下去整，逐渐减少 old
    //     old = Math.floor(old / 10);
    // }
    // // 加上原先的正负号，以及溢出判断
    // if (x < 0) {
    //     return now <= Math.pow(2, 31) ? -now : 0;
    // } else {
    //     return now <= Math.pow(2, 31) ? now : 0;
    // }

    // 2. 数学解法，使用位运算取整和进行溢出判断
    // a | 0 可以将变量 a 中的数值转换为 32 位有符号整数
    // 因为数位运算符 | 只适用于 32 位 整数（它只关心 32 位以内的值，其他的数位将被忽略）
    // 因此与 0 进行操作即可截取 a 中 的 32 位数位。
    let res = 0;
    while (x !== 0) {
        // 求余，操作同上一步
        res = res * 10 + (x % 10);
        // 向下取整时，使用位运算符号 |
        // | 0 可以强制转化为 32 位有符号的整数，且无论正负，只移除小数部分，所以不会超出 32 位
        // | 0 会对正数进行向下取整，负数进行向上取整，符合期望
        x = (x / 10) | 0;
    }
    // 超过 32 位的整数转换结果不等于自身，可用作溢出判断
    return (res | 0) === res ? res : 0;
};
// @lc code=end
