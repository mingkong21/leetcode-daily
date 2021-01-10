/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const n1 = word1.length + 1,
        n2 = word2.length + 1;
    let dp = [...new Array(n1)].map(item => ([...new Array(n2)]));

    // 第一列
    for (let i = 0; i < n1; i++) {
        dp[i][0] = i;
    }

    // 第一行
    for (let j = 0; j < n2; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i < n1; i++) {
        for (let j = 1; j < n2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                const temp = Math.min(dp[i - 1][j - 1], dp[i][j - 1]);
                dp[i][j] = Math.min(temp, dp[i - 1][j]) + 1;
            }
        }
    }

    return dp[n1 - 1][n2 - 1];
};
// @lc code=end