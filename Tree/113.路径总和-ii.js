/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (!root) {
        return [];
    }
    const pathes = [];
    helper(root, sum, pathes, []);
    return pathes;
};
const helper = (root, sum, pathes, path) => {
    if (!root) {
        return;
    }

    path = [...path, root.val];

    if (!root.left && !root.right && root.val === sum) {
        pathes.push(path);
        return;
    }

    helper(root.left, sum - root.val, pathes, path);
    helper(root.right, sum - root.val, pathes, path);
}
// @lc code=end