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
    if (x < 0) return 0;
    // 因为等等会修改 x 所以需要拷贝一份
    let old = x,
        now = 0;
    while (x > 0) {
        // 先求余数
        let temp = x % 10;
        // 赋值给 now , now 的第一位与 s 的最后一位相同，以此类推
        // 最后 now 为 s 的反转数
        now = now * 10 + temp;
        // 减少 x
        x = (x - temp) / 10;
    }
    return old === now;
};
// @lc code=end
