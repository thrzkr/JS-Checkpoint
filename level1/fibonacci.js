// Return the Fibonacci number at position n, with positions 0 and 1 as base cases.
function fibonacci(n) {
	if (n < 2) {
		return n
	}
	let a = 0
	let b = 1
	// Advance the pair together so b holds the value at the current position.
	for (let i = 2; i <= n; i++) {
		[a , b] = [b , a + b]
	}
	return b
}

// Example calculations.
console.log(fibonacci(6));
console.log(fibonacci(10));