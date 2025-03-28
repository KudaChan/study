// Approach
/**
 * find median index.
 * check value at median index if greater consider left size else right side.
 * base case num[m] === tar || left > right
 * recursive call.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertCommon = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

var searchInsert = function (nums, target) {
  return searchInsertHelper(nums, target, 0, nums.length - 1);
};

function searchInsertHelper(nums, target, left, right) {
  if (left > right) return left;
  const mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) return mid;
  if (nums[mid] < target) {
    return searchInsertHelper(nums, target, mid + 1, right);
  } else {
    return searchInsertHelper(nums, target, left, mid - 1);
  }
};

// Test
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));