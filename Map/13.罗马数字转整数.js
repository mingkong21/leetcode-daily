/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // 本题涉及对应的键值对，应该用 HashMap
    // 而不是无脑判断和使用 switch
    // 使用 switch 不加 break 就不会跳出 switch 结构
    // 不管后面条件是否符合都会执行，直到遇到第一个 break 才会跳出
    let res = 0;
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < s.length; i++) {
        const temp = map[s[i]];
        // 判断特殊情况
        // i + 1 不会越界，s[i]的值小于后一位
        // 判断原因来源于罗马数字 4 和 9 的规律
        // 以及罗马数字中小的数字在大的数字的右边
        if (i < s.length - 1 && temp < map[s[i + 1]]) {
            // IV = -I(-1) + V(5)，以此类推
            // 不要漏掉题目的任何信息
            res -= temp;
        } else {
            res += temp;
        }
    }
    // return res;

    // 思路二：列出所有特殊情况，额外处理
    let specialMap = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
    return s
        .split('')
        .reduce(
            (prev, curr, index, arr) =>
                ((arr[index + 1] &&
                    specialMap[curr + arr[index + 1]] &&
                    -map[curr]) ||
                    map[curr]) + prev,
            0
        );
};
// @lc code=end
