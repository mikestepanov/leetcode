/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num === curr) {
      nums.splice(i, 1);
      i--;
    } else {
      curr = num;
    }
  }

  return nums.length;
};
