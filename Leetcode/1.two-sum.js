/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let numberMap = {}; // number->index
    for(let i=0; i<nums.length; i++) {
        if(numberMap[target-nums[i]] >= 0) {
            return [numberMap[target-nums[i]], i]
        }
        numberMap[nums[i]] = i;
    }
};