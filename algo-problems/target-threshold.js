// Given positive array of ints and a target sum, return the "threshold", x, value to make all elements >= x equal to x such that 
// the sum of all of the elements in the array are equal to the target sum. Note that x can be a floating point value.

// ex:
[1, 2] target = 3 // satisfies target already; threshold 2 || > 2

[1, 2, 5] target = 6 --> threshold = 3
(array will be [1, 2, 3] because 2 + 1 + 3 = 6)

// example in solution
[1, 2, 5] target = 4 --> threshold = 1.5
(array will be [1, 1.5, 1.5] because 1 + 1.5 + 1.5 = 4)

function threshold (nums, target) {
	let sorted = nums.slice().sort((a, b) => {return a - b});
	let currentSum = sorted[0];

	for (let i = 0; i < sorted.length; i++) {
		// we want to check if adding the next element in the array is at or over our limit
		let nextSum = currentSum + sorted[i + 1];
		
		if (nextSum >= target) {
			// at nums[1] -> elementsLeft = (3 - 1) = 2
			let elementsLeft = (sorted.length - i);

			// at nums[1] -> val = (4 - 1) = 3
			let val = target - currentSum;

			// return 1.5
			return (val / elementsLeft);
		}

		if (i > 0) {currentSum += nums[i]}	
	}
	
	// if no threshold is hit, return last element in the array
	return sorted[sorted.length - 1]
}