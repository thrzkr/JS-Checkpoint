// Reverse the elements within each consecutive chunk of the input array.
function reverseChunks(arr, chunkSize) {
  // A non-positive chunk size cannot form valid chunks.
  if (chunkSize <= 0) {
    return [];
  }

  const result = [];

  // Slice each chunk; the final chunk may contain fewer than chunkSize items.
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(...chunk.reverse());
  }

  return result;
}

// Examples with complete and partial final chunks.
console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));
console.log(reverseChunks([10, 20, 30, 40, 50], 2));
console.log(reverseChunks([1, 2, 3, 4, 5], 4));