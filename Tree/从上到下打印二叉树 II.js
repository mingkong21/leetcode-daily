/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root],
        res = [];

    while (queue.length !== 0) {
        let temp = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            temp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        res.push(temp);
    }
    return res;
};