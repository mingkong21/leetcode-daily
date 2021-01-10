/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    return helper(root) !== -1;
};
const helper = (root) => {
    if (root === null) return 0;

    let left = helper(root.left);
    if (left === -1) return -1;

    let right = helper(root.right);
    if (right === -1) return -1;

    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;

}
// @lc code=end