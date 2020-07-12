/* Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]*/

var subsets = function(nums) {
    if (nums.length === 0) {return [[]]}
    
	let powerSet = [];
	recurse(nums, 0, [], powerSet);
	return powerSet;
}

function recurse (nums, idx, currentSubset, powerSet) {
	powerSet.push(currentSubset.slice());
	
	for (let i = idx; i < nums.length; i++) {
		currentSubset.push(nums[i]);
		recurse(nums, i + 1, currentSubset, powerSet);
		currentSubset.pop();
    }
}}
}
