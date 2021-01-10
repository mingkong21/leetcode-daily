/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];
    let res = [];

    for (let i = 0; i < numRows; i++) {
        let temp = [];
        for (let j = 0; j < i + 1; j++) {
            j === 0 || j === i ? temp.push(1) : temp.push(res[i - 1][j - 1] + res[i - 1][j]);
        }
        res.push(temp);
    }
    return res;
};
// @lc code=end