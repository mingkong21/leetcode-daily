/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        // if (!map[nums[i]]) {
        //     map[nums[i]] = true;
        // } else {
        //     return nums[i];
        // }
        while (i !== nums[i] && nums[nums[i]] !== nums[i]) {
            [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]];
        }
        if (i !== nums[i] && nums[nums[i]] == nums[i]) {
            return nums[i];
        }
    }
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));