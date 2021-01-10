/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // let dp = [cost[0], cost[1]];
    // cost.push(0);
    // const n = cost.length - 1;
    // for (let i = 2; i <= n; i++) {
    //     // if (i === n) {
    //     //     dp[i] = Math.min(dp[i - 2], dp[i - 1]);
    //     // } else {
    //     dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
    //     // }
    // }
    // return dp[n];
    const n = cost.length;
    let pre = cost[0];
    let next = cost[1];
    for (let i = 2; i < n; i++) {
        [pre, next] = [next, Math.min(pre, next) + cost[i]];
    }
    return Math.min(pre, next);
};
// @lc code=end