/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        mid === nums[mid] ? left = mid + 1 : right = mid - 1;
    }
    return left;
};
// @lc code=end