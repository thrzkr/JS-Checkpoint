// Calculate n! by multiplying all positive integers up to n.
const factorial = (n) => {
	// By definition, zero factorial is 1.
	if (n === 0) {
		return 1
	}
	let result = 1
	// Accumulate the product 1 * 2 * ... * n.
	for (let i = 1; i <= n; i++) {
		result *= i
	}
	return result
}

// Example calculations.
console.log(factorial(5))
console.log(factorial(12))
console.log(factorial(10))