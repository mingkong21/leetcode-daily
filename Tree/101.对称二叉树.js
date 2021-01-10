/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
    if (root === null) return true;

    // return dfs(root.left, root.right);

    let queue = [root.left, root.right];
    while (queue.length) {
        let p = queue.pop();
        let q = queue.pop();

        if (!p && !q) continue;
        if (p && !q || !p && q) return false;
        if (p.val !== q.val) return false;

        queue.unshift(p.left);
        queue.unshift(q.right);
        queue.unshift(p.right);
        queue.unshift(q.left);

    }
    return true;
};
const dfs = (p, q) => {
    if (!p || !q) return !p && !q;
    if (p.val !== q.val) return false;

    return dfs(p.left, q.right) && dfs(p.right, q.left);
}
// @lc code=end