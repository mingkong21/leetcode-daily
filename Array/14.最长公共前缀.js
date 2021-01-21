/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let res = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            // 一个一个对比，如果一样就加入到一个新的数组中
            // 只要其中某一个字符串的一个字母和前面的不同
            // 就证明最长的公共解已经结束了，就可直接退出
            if (strs[0][i] !== strs[j][i]) {
                return res;
            }
        }
        res = res + strs[0][i];
    }
    return res;

    // 重做最长公共前缀
};
// @lc code=end
