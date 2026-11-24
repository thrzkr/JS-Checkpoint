// Return the positive divisors of n, excluding n itself.
function divisors (n) {
	// Work with the positive magnitude so negative inputs use the same search.
	if (n < 0) {
		n = -n
	}
	let r = []
	// Test every positive integer below n for an exact division.
	for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			r.push(i)
		}
	}
	return r
}

// Example inputs, including 1 and a negative number.
console.log(divisors(15));
console.log(divisors(28));
console.log(divisors(1));
console.log(divisors(-15));