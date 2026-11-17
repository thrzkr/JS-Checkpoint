# Functions and Algorithms Guide

This project contains a sequence of JavaScript exercises that practice core programming concepts such as loops, conditionals, arrays, number theory, and sorting. Each file contains one or more functions that solve a specific problem.

## Level 1

### `evenSum(nums)`
File: `level1/even-sum.js`

Purpose:
- Adds all even integers from 2 up to the given number.
- If the input is below 2, it returns 0 because there are no positive even numbers in that range.

Algorithm:
- Start with a running total of 0.
- Loop from 2 to `nums` inclusive.
- Check if each value is even using `i % 2 === 0`.
- Add it to the sum if it is even.

Example:
- `evenSum(5)` -> `6` because `2 + 4 = 6`

Time complexity:
- O(n)

Space complexity:
- O(1)

### `factorial(n)`
File: `level1/factorial.js`

Purpose:
- Calculates the factorial of a non-negative integer.
- Example: `5! = 5 * 4 * 3 * 2 * 1 = 120`

Algorithm:
- If `n === 0`, return `1` because `0! = 1`.
- Initialize `result` to 1.
- Multiply `result` by each integer from 1 through `n`.

Example:
- `factorial(5)` -> `120`

Time complexity:
- O(n)

Space complexity:
- O(1)

### `fibonacci(n)`
File: `level1/fibonacci.js`

Purpose:
- Returns the Fibonacci number at index `n`.
- Sequence: `0, 1, 1, 2, 3, 5, 8, ...`

Algorithm:
- Base case: if `n < 2`, return `n`.
- Maintain two variables, `a` and `b`.
- Iterate from 2 to `n` and update the two numbers together:
  - `a` becomes the previous value
  - `b` becomes the next Fibonacci value
- Return `b`, which holds the value for the requested position.

Example:
- `fibonacci(6)` -> `8`

Time complexity:
- O(n)

Space complexity:
- O(1)

## Level 2

### `divisors(n)`
File: `level2/divisor-finder.js`

Purpose:
- Finds all positive divisors of a number, excluding the number itself.
- The function also handles negative numbers by converting them to their absolute value before checking divisibility.

Algorithm:
- If `n` is negative, convert it to positive.
- Loop from 1 to `n - 1`.
- If `n % i === 0`, then `i` is a divisor and it is added to the result array.

Example:
- `divisors(15)` -> `[1, 3, 5]`

Time complexity:
- O(n)

Space complexity:
- O(k), where `k` is the number of divisors found

### `isPerfectNum(n)`
File: `level2/perfect-num.js`

Purpose:
- Checks whether a number is a perfect number.
- A perfect number is equal to the sum of all its proper divisors.

Algorithm:
- If `n < 2`, return `false` because perfect numbers are positive integers greater than or equal to 2.
- Start `sum` at 0.
- Loop from 1 to `n - 1`.
- If `i` divides `n` exactly, add it to `sum`.
- Return `true` only if the total equals the original number.

Example:
- `isPerfectNum(6)` -> `true`
- `isPerfectNum(28)` -> `true`
- `isPerfectNum(12)` -> `false`

Time complexity:
- O(n)

Space complexity:
- O(1)

## Level 3

### `palindromicChain(n)`
File: `level3/palindromic-chains.js`

Purpose:
- Processes a list of numbers and finds a palindrome for each one.
- If a number is already a palindrome, it keeps it.
- Otherwise, it repeatedly reverses and adds the digits until a palindrome is reached or the process exceeds a limit.

Algorithm:
- Loop through each value in the input array.
- Check whether the value is already a palindrome using `isp(current)`.
- If it is not, begin a reverse-and-add process:
  - add the original number to its reversed version
  - repeat up to 99 times
  - stop once a palindrome is reached
- If no palindrome is found within that limit, store `0` for that entry.

Helper functions:

#### `isp(n)`
- Compares `n` with its reversed version.
- Returns `true` if the number reads the same forward and backward.

#### `reverseN(c)`
- Converts the number to a string, reverses the digits, and converts the result back to a number.

Example:
- `palindromicChain([87, 33, 123, 196])` performs palindrome conversion attempts on each number.

Time complexity:
- Depends on the number of reverse-and-add steps and the digit length, but it is roughly O(m * t), where `t` is the iteration limit.

Space complexity:
- O(k), where `k` is the number of results stored

### `sentencePyramid(sentence)`
File: `level3/sentence-pyramid.js`

Purpose:
- Prints a pyramid-like output from a sentence by showing progressively longer word prefixes.

Algorithm:
- Split the sentence into words with `split(" ")`.
- Remove empty strings caused by extra spaces.
- Loop from 1 to the number of words.
- Print the first `i` words joined with spaces.

Example:
- `sentencePyramid("This is a simple sentence pyramid")` prints:
  - `This`
  - `This is`
  - `This is a`
  - ...

Time complexity:
- O(n^2) in the worst case because each printed line builds a larger substring/array slice.

Space complexity:
- O(n) for the array of words

## Level 4

### `reverseChunks(arr, chunkSize)`
File: `level4/array-chunk-reversal.js`

Purpose:
- Reverses the values inside each chunk of an array.
- The final chunk may be shorter than the requested chunk size.

Algorithm:
- If `chunkSize <= 0`, return an empty array.
- Start with an empty result array.
- Move through the original array in steps of `chunkSize`.
- For each chunk, take the slice and reverse it using `reverse()`.
- Append the reversed chunk to the result.

Example:
- `reverseChunks([1, 2, 3, 4, 5, 6, 7], 3)` -> `[3, 2, 1, 6, 5, 4, 7]`

Time complexity:
- O(n)

Space complexity:
- O(n)

### `nestedArrayReverser(words)`
File: `level4/nested-array-reverser.js`

Purpose:
- Reverses the order of the outer array, reverses each inner array, flattens the results, and joins them into a single string.

Algorithm:
- Reverse the outer array with `.reverse()`.
- Reverse each inner array with `.map((inner) => inner.reverse())`.
- Flatten all inner values with `.flat()`.
- Join them into one space-separated string with `.join(" ")`.

Example:
- Input: `[["hello", "world"], ["JavaScript", "is"]]`
- Output: `is JavaScript world hello`

Time complexity:
- O(n)

Space complexity:
- O(n)

## Level 5

### `insertionSortAnalyzer(arr, comparator)`
File: `level5/insertion-sort-analyzer.js`

Purpose:
- Sorts an array using insertion sort while tracking how many comparisons and swaps were performed.

Algorithm:
- Start with `iterations = 0` and `swaps = 0`.
- For each index from 1 to the end of the array:
  - Compare the current element with the element before it.
  - If the comparison indicates the order is wrong, swap them.
  - Continue shifting the element left while it should come earlier.
- Count the number of comparisons and swaps as the algorithm runs.
- Return an object containing:
  - `sortedArray`
  - `iterations`
  - `swaps`

Comparator:
- The provided comparator is numeric:
  - `a - b`
- A negative result means `a` should come before `b`.

Example:
- `insertionSortAnalyzer([5, 2, 4, 6, 1, 3], comparator)` returns a sorted array plus its operation counts.

Time complexity:
- Worst case: O(n^2)
- Best case: O(n) for nearly sorted arrays

Space complexity:
- O(1) aside from the input array itself

## Summary of Core Programming Concepts Used

Across the project, these JavaScript and algorithmic ideas are used repeatedly:

- Loops (`for`, `while`-style iteration patterns)
- Conditionals (`if` statements)
- Arithmetic and modular division (`%` operator)
- Arrays and array methods (`slice`, `reverse`, `map`, `flat`, `join`, `push`)
- Number theory (divisors, perfect numbers, Fibonacci numbers)
- String manipulation (reversing digits, splitting words)
- In-place sorting and comparison tracking
- Time and space complexity reasoning

This repository is a practice set designed to build confidence with algorithmic thinking, JavaScript syntax, and problem-solving techniques.
