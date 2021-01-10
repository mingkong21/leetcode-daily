/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {

    let arr = stones.sort((a, b) => b - a);

    // if (stones.length <= 1) {
    //     return arr[0];
    // }

    while (arr.length > 1) {
        if (arr[0] === arr[1] && arr.length > 2) {
            // 两块石头重量相同且个数大于2，全部粉碎
            arr.splice(0, 2);
        } else {
            // 否则粉碎两块石头，并添加粉碎两块的差作为新的重量
            arr.splice(0, 2, arr[0] - arr[1]);
            arr = arr.sort((a, b) => b - a);
        }
    }

    return arr[0];

    // return lastStoneWeight(arr);

};
// @lc code=end