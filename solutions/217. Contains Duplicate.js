/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let uniqueNums = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(uniqueNums);
    if (!uniqueNums.includes(nums[i])) {
      uniqueNums.push(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
