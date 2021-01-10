/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
    let res = '';
    let carry = 0;
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
        const n1 = num1[i] >= 0 ? +num1[i] : 0;
        const n2 = num2[j] >= 0 ? +num2[j] : 0;
        const sum = n1 + n2 + carry;
        res = sum % 10 + res;
        carry = sum / 10 | 0;
    }
    carry && (res = '1' + res);
    return res;
};

// @lc code=end