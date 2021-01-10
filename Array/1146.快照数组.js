/*
 * @lc app=leetcode.cn id=1146 lang=javascript
 *
 * [1146] 快照数组
 */

// @lc code=start
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
    const tempArr = new Array(length).fill(0).map(item => new Map());
    this.arr = tempArr;
    this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
    this.arr[index].set(this.snapId, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    this.snapId++;
    return this.snapId - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    let snapIds = [...this.arr[index].keys()];
    let left = 0,
        right = snapIds.length - 1,
        mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (snapIds[mid] < snap_id) {
            left = mid + 1;
        } else if (snapIds[mid] > snap_id) {
            right = mid - 1;
        } else {
            return this.arr[index].get(snap_id);
        }
    }
    return this.arr[index].get(snapIds[left - 1]) || null;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end