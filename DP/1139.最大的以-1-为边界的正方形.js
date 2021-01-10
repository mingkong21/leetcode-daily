/*
 * @lc app=leetcode.cn id=1139 lang=javascript
 *
 * [1139] 最大的以 1 为边界的正方形
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    const dp = [...new Array(m + 1)].map(item => ([...new Array(n + 1)]).map(item => ([0, 0])));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (grid[i - 1][j - 1] == 1) {
                dp[i][j][0] = 1 + dp[i][j - 1][0];
                dp[i][j][1] = 1 + dp[i - 1][j][1];
            }
        }
    }

    let res = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            for (let side = Math.min(dp[i][j][0], dp[i][j][1]); side >= 1; side--) {
                if (dp[i][j - side + 1][1] >= side && dp[i - side + 1][j][0] >= side) {
                    res = Math.max(res, side);
                    break; //更短的就没必要考虑了
                }
            }
        }
    }
    return res * res;
};

console.log(largest1BorderedSquare([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]));
// @lc code=end

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
    var m = grid.length;
    var n = grid[0].length;
    var side = 0;
    var flagx = flagy = false;
    for (var row = 0; row < m; row++) {
        for (var col = 0; col < n; col++) {
            if (grid[row][col]) {
                var x = i = row;
                var y = j = col;
                while (++i < m && grid[i][col] && ++j < n && grid[row][j]) {
                    while (x <= i && grid[x++][j]) {
                        if (x === i + 1) flagx = true;
                    }
                    while (y <= j && grid[i][y++]) {
                        if (y === j + 1) flagy = true;
                    }
                    if (flagx && flagy && x - row > side) {
                        side = x - row
                    }
                    x = row;
                    y = col;
                    flagy = false;
                    flagx = false;
                }
                side = Math.max(side, 1);
            }
        }
    }
    return side * side;
};