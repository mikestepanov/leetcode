/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const bucket = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    let exists = bucket[diff];

    if (exists !== undefined) {
      return [exists, i];
    }

    bucket[num] = i;
  }
};
