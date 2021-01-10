/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    // 查找表
    return findMap(nums1, nums2);
};

const findMap = (nums1, nums2) => {

    // 为两个数组分别建立 map， 用来存储 num - > count 的键值对， 统计每个数字出现的数量。
    const map1 = makeCountMap(nums1);
    const map2 = makeCountMap(nums2);

    let res = [];

    for (let num of map1.keys()) {
        const const1 = map1.get(num);
        const const2 = map2.get(num);

        // 然后对其中一个 map 进行遍历， 查看这个数字在两个数组中分别出现的数量， 取出现的最小的那个数量
        // 比如数组 1 中出现了 1 次， 数组 2 中出现了 2 次， 那么交集应该取 1 次
        if (const2) {
            const pushCount = Math.min(const1, const2);
            for (let i = 0; i < pushCount; i++) {
                res.push(num);
            }
        }
    }

    return res;
}

const makeCountMap = (nums) => {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const count = map.get(num);

        if (count) {
            map.set(num, count + 1);
        } else {
            map.set(num, 1);
        }
    }

    return map;
};
// @lc code=end