/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 滑动窗口：维护一个可以移动的队列
    // 使用数组来维护滑动窗口
    // 遍历字符串，判断字符串是否在滑动窗口数组内
    // 不在则 push，在则删除同样字符及之前的字符，再 push
    // 维护一个 max，实时记录滑动窗口的最大长度
    let arr = [],
        max = 0;
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i]);
        // 存在
        if (index !== -1) {
            // 包括重复的，都要删除
            arr = arr.slice(index + 1);
        }
        // push 和 比较
        arr.push(s[i]);
        max = Math.max(max, arr.length);
    }
    return max;
};
// @lc code=end
