/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let times = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
    times--;

    if (times === 0) {
      return;
    }
  }
};

//88.37%
// need to improve!
