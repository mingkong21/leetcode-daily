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
    let old = Math.abs(x);
    let now = 0;
    while (old > 0) {
        // 求余，使得 now 的第一位等于 old 的最后一位
        now = now * 10 + (old % 10);
        // 向下去整，逐渐减少 old
        old = Math.floor(old / 10);
    }
    // 加上原先的正负号，以及溢出判断
    if (x < 0) {
        return now <= Math.pow(2, 31) ? -now : 0;
    } else {
        return now <= Math.pow(2, 31) ? now : 0;
    }
};
// @lc code=end
