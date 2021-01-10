/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {

    return nums[bfprt(nums, 0, nums.length - 1, nums.length - k)];
}

const bfprt = (arr, left, right, k) => {

    let index;

    if (left < right) {

        // 划分数组
        index = partition(arr, left, right);

        if (k < index) {
            // k 在左边
            return bfprt(arr, left, index - 1, k);
        } else if (k > index) {
            // k 在右边
            return bfprt(arr, index + 1, right, k);
        } else {
            return index;
        }
    }
    return left;
}

const partition = (arr, left, right) => {
    // 基准点
    let datum = arr[findMid(arr, left, right)];

    // 开始调整
    while (left < right) {

        // 左指针右移
        while (arr[left] < datum) {
            left++;
        }

        // 右指针左移
        while (arr[right] > datum) {
            right--;
        }

        if (left < right) swap(arr, left, right);

        // 当数组中存在重复数据时，即都为datum，但位置不同
        // 继续递增i，防止死循环
        if (arr[left] === arr[right] && left !== right) {
            left++;
        }
    }

    return left;
}

/**
 * 数组 arr[left, right] 每五个元素作为一组，并计算每组的中位数，
 * 最后返回这些中位数的中位数下标（即主元下标）。
 *
 * @attention 末尾返回语句最后一个参数多加一个 1 的作用其实就是向上取整的意思，
 * 这样可以始终保持 k 大于 0。
 */
const findMid = (arr, left, right) => {
    if (right - left < 5) {
        return insertSort(arr, left, right);
    }
    let n = left - 1;

    // 每五个作为一组，求出中位数，并把这些中位数全部依次移动到数组左边
    for (let i = left; i + 4 <= right; i += 5) {
        let index = insertSort(arr, i, i + 4);
        swap(arr[++n], arr[index]);
    }

    // 利用 bfprt 得到这些中位数的中位数下标（即主元下标）
    return findMid(arr, left, n);
}

/**
 * 对数组 arr[left, right] 进行插入排序，并返回 [left, right]
 * 的中位数。
 */
let insertSort = (arr, left, right) => {
    let temp, j;
    for (let i = left + 1; i <= right; i++) {
        temp = arr[i];
        j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return (Math.floor((right - left) / 2)) + left;
}

// 交换
let swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// @lc code=end