/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// var maxDepth = function (root) {
//     // if (root === null) return 0;
//     // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

//     let stack = [];
//     let max = 0,
//         curr = root,
//         prev = null;
//     while (curr || stack.length) {
//         while (curr) {
//             stack.push(curr);
//             curr = curr.left;
//         }
//         curr = stack[stack.length - 1];
//         if (curr.right && curr.right !== prev) {
//             curr = curr.right;
//         } else {
//             if (!curr.left && !curr.right) {
//                 max = Math.max(max, stack.length);
//             }
//             prev = curr;
//             stack.pop();
//             curr = null;
//         }
//     }
//     return max;
// };
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    const queue = [root];

    let res = 0;

    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let tmp = queue.shift();
            if (tmp.left) {
                queue.push(tmp.left);
            }
            if (tmp.right) {
                queue.push(tmp.right);
            }
        }

        res++;
    }

    return res;
}
// @lc code=end