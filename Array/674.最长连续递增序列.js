/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let count = 1,
        res = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        nums[i] < nums[i + 1] ? count++ : count = 1;
        res = Math.max(res, count);
    }

    return res;
};
// @lc code=end