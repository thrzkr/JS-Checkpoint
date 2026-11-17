// Sort an array in place with insertion sort and report comparisons and swaps.
function insertionSortAnalyzer(arr, comparator) {
  let iterations = 0;
  let swaps = 0;

  // Grow a sorted prefix by moving each next value left while it belongs earlier.
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // Count every adjacent comparison, including comparisons that do not swap.
      iterations++;
      if (comparator(arr[j], arr[j - 1]) < 0) {
        // Swap neighboring out-of-order values and record the operation.
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swaps++;
      }
    }
  }

  // Return the mutated array together with the algorithm's operation counts.
  return {
    sortedArray: arr,
    iterations,
    swaps,
  };
}

// Numeric comparator: negative means a should appear before b.
const comparator = (a, b) => a - b;

// Run the analyzer on an example list and print its result.
const result = insertionSortAnalyzer([5, 2, 4, 6, 1, 3], comparator);

console.log(result);