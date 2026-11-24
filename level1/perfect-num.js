// A perfect number equals the sum of its positive divisors other than itself.
function isPerfectNum(n) {
// Values below 2 have no positive proper divisors that can sum to the number.
if (n < 2) {
	return false
}
let sum = 0
// Add each divisor smaller than n.
for (let i = 1; i < n; i++) {
	if (n % i === 0) {
		sum +=i
	}
}
// The number is perfect exactly when its proper-divisor sum matches n.
return sum === n
}

// Example checks for perfect and non-perfect numbers.
console.log(isPerfectNum(6));
console.log(isPerfectNum(28));
console.log(isPerfectNum(12));