/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // for (let i = 0; i < k; i++) {
    //     nums.unshift(nums.pop())
    // }
    // nums.splice(0, 0, ...nums.splice(nums.length - k));
    // nums.unshift(...nums.splice(nums.length - k));
    k = k % nums.length;
    // reverse(nums, 0, nums.length - 1);
    // reverse(nums, 0, k - 1);
    // reverse(nums, k, nums.length - 1);

    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let currentMoveIndex = start;
        let currentMoveItem = nums[start];

        do {
            // 计算要移动到的位置，循环移动到当前位置的下k个位置
            let nextMoveIndex = (currentMoveIndex + k) % nums.length;
            // 缓存将要移动位置的值
            let temp = nums[nextMoveIndex];
            // 将当前值移动到下一个位置
            nums[nextMoveIndex] = currentMoveItem;
            // temp的值为下一次要被移动的值
            currentMoveItem = temp;
            // nextMoveIndex即为下一次移动的起始值
            currentMoveIndex = nextMoveIndex;
            count++; // 计算移动次数
        } while (start !== currentMoveIndex);
    }
};
// const reverse = (arr, start, end) => {
//     while (start < end) {
//         // 使用双指针，每次循环将两个指针的值调换。
//         [arr[start], arr[end]] = [arr[end], arr[start]];

//         // 调换完成之后，将两个指针向内移动。
//         start++;
//         end--;
//     }
// }
// @lc code=end