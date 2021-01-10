/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function (head) {
//     if (head === null) return null;

//     const map = new Map();
//     let node = head;
//     let copyHead = new Node(node.val);
//     let copyNode = copyHead;
//     map.set(node, copyNode);

//     while (node.next) {
//         copyNode.next = new Node(node.next.val);
//         node = node.next;
//         copyNode = copyNode.next;
//         map.set(node, copyNode);
//     }

//     copyNode = copyHead;
//     node = head;

//     while (copyNode) {
//         copyNode.random = map.get(node.random);
//         copyNode = copyNode.next;
//         node = node.next;
//     }

//     return copyHead;
// };

const map = new Map();
var copyRandomList = function (head) {
    return copy(head);
}

const copy = curr => {
    if (curr === null) return curr;
    if (map.has(curr)) {
        return map.get(curr);
    }
    let res = new Node();
    map.set(curr, res);
    res.val = curr.val;
    res.next = copy(curr.next);
    res.random = copy(curr.random);
    return res;
}

// @lc code=end