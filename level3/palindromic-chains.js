// For each input, keep it if it is a palindrome; otherwise repeatedly add
// its reversed digits until a palindrome is found or the attempt limit is reached.
function palindromicChain(n) {
	let r = []
	for (let i = 0; i < n.length; i++) {
		let current = n[i]
		// Values already reading the same forwards and backwards need no changes.
		if (isp(current)) {
			r.push(current)
		} else {
			let found = false
			// Try at most 99 reverse-and-add steps for this input value.
			for (let tries = 1; tries < 100; tries++) {
				current += reverseN(current)
				if (isp(current)) {
					r.push(current)
					found = true
					break
				}
			}
			// Use 0 to indicate that no palindrome was found within the limit.
			if (!found) {
				r.push(0)
			}
		}		
	}
	return r
}

// Compare a value with its digit-reversed form.
const isp = (n) =>n === reverseN(n)

// Convert to text to reverse the digits, then convert the result back to a number.
const reverseN= (c) => Number(String(c).split("").reverse().join(""));

// Example inputs, including a value that may not reach a palindrome in time.
console.log(palindromicChain([87, 33, 123, 196]));