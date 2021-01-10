/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let slow = 0;
    for (let quick = 1; quick < nums.length; quick++) {
        if (nums[slow] !== nums[quick]) {
            nums[++slow] = nums[quick];
        }
    }
    return slow + 1;
};
// @lc code=end
