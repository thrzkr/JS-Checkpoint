// Sort an array in place with insertion sort and report comparisons and swaps.
function insertionSortAnalyzer(arr, comparator) {
  let iterations = 0;
  let swaps = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      iterations++; 
      if (comparator(arr[j], arr[j - 1]) < 0) {
        let temp = arr[j]; 
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swaps++;
      } else {
        break;
      }
    }
  }

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