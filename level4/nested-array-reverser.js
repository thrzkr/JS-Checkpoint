// Reverse the outer array and each inner array, then flatten and join the values.
function nestedArrayReverser(words) {
  // reverse() mutates the input arrays; map reverses each inner array in place.
  return words
    .reverse()
    .map((innerArray) => innerArray.reverse())
    .flat()
    // Convert the flattened values into a single space-separated string.
    .join(" ");
}
