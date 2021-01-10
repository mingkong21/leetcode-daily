/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // let node1 = headA,
    //     node2 = headB;

    // while (node1 !== node2) {
    //     node1 = node1 !== null ? node1.next : headB;
    //     node2 = node2 !== null ? node2.next : headA;
    // }
    // return node1;

    if (!headA || !headB) return null;

    // 获取链表长度
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    // 长链表先行
    let long, short, interval;

    if (lenA > lenB) {
        long = headA;
        short = headB;
        interval = lenA - lenB;
    } else {
        long = headB;
        short = headA;
        interval = lenB - lenA;
    }

    // 到达同一起点
    while (interval--) {
        long = long.next;
    }

    while (long) {
        if (long === short) {
            return long;
        }
        long = long.next;
        short = short.next;
    }

    return null;
};
const getLength = head => {
    let res = 0;
    while (head) {
        res++;
        head = head.next;
    }
    return res;
}
// @lc code=end