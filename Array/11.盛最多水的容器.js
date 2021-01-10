/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let max = 0,
    //     left = 0,
    //     right = height.length - 1;
    // while (left < right) {
    //     const temp = (right - left) * Math.min(height[left], height[right]);

    //     if (temp > max) {
    //         max = temp;
    //     }
    //     // 左边较矮，往右移；右边较矮，往左移
    //     height[left] < height[right] ? left++ : right--;
    // }
    // return max;

    let max = 0;

    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         const area = (j - i) * Math.min(height[i], height[j]);
    //         max = Math.max(max, area);
    //     }
    // }

    for (let i = 0, j = height.length - 1; i < j;) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--];
        const area = (j - i + 1) * minHeight; // +1 是因为下标 -1
        max = Math.max(max, area);
    }
    return max;
};
// @lc code=end