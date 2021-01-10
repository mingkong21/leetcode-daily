/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder, a, b, c, d) {

    // if (!preorder.length || !inorder.length) return null;
    // const rootVal = preorder[0];
    // const node = new TreeNode(rootVal);
    // const index = inorder.indexOf(preorder[0]);

    // node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    // node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

    // return node;
    if (typeof a !== "number") {
        a = 0;
        b = preorder.length - 1;
        c = 0;
        d = inorder.length - 1;
    }

    if (a > b) return null;
    const node = new TreeNode(preorder[a]);
    const index = inorder.findIndex((n, i) => {
        if (i >= c && i <= d && n === preorder[a]) return true;
        else return false;
    })
    node.left = buildTree(preorder, inorder, a + 1, a + index - c, c, index - 1);
    node.right = buildTree(preorder, inorder, a + index - c + 1, b, index + 1, d);
    return node;

};
// @lc code=end