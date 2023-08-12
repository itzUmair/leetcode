/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let high = nums.length - 1;
  let low = 0;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
