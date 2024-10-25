// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {

    // initialize max to -1
    let max = -1;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // if nums[i] is positive and -nums[i] is in array nums then assign maximum value to max
        if (Math.sign(nums[i]) === 1) {
            if (nums.includes(-nums[i])) {
                max = Math.max(max, nums[i]);
            }
        }
    }

    // return max
    return max;
};

/*
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.
*/


/*
Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.

Example 2:

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.
*/


/*
Constraints:

1 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
nums[i] != 0
*/