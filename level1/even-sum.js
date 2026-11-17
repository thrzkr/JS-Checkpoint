// Add every even integer from 2 through the given upper limit.
function evenSum (nums) {
	// There are no positive even integers in this range when the limit is below 2.
	if (nums < 2) {
		return 0
	}
	let sum = 0;
	// Visit each number up to the limit and include only even values.
	for (let i = 2; i <= nums; i++) {
		if (i % 2 === 0) {
			sum += i
		}
	}
	return sum
}

// Example calls and their expected results.
console.log(evenSum(5)); // Output: 6
console.log(evenSum(1)); // Output: 0
