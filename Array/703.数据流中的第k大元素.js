var KthLargest = function (k, nums) {
    // 第一个元素空着
    this.minHeap = [null];
    this.k = k;
    // 所有元素都添加到最小堆
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
};

KthLargest.prototype.add = function (val) {
    if (this.minHeap.length <= this.k) {
        // 最小堆没满，放到最小堆
        this.minHeap.push(val);
        // 上浮最新的元素，维护堆的秩序
        this.up(this.minHeap.length - 1);
    } else {
        if (val > this.minHeap[1]) {
            // 新的元素比最小堆堆顶大，替换最小堆堆顶
            this.minHeap[1] = val;
            // 下沉这个元素，维护堆的秩序
            this.down(1);
        }
        // 否则直接丢弃这个元素
    }
    return this.minHeap[1];
};

KthLargest.prototype.up = function (idx) {
    let parent = Math.floor(idx / 2);
    if (parent >= 1 && this.minHeap[parent] > this.minHeap[idx]) {
        swap(this.minHeap, parent, idx);
        // 递归上浮
        this.up(parent);
    }
};

KthLargest.prototype.down = function (idx) {
    let to = idx;
    // 和左子元素比较
    let left = idx * 2;
    if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[to]) {
        to = left;
    }
    // 和右子元素比较
    let right = idx * 2 + 1;
    if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[to]) {
        to = right;
    }
    if (to !== idx) {
        swap(this.minHeap, to, idx);
        // 递归下沉
        this.down(to);
    }
};

function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}