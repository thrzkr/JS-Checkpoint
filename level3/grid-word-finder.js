function gridWordsFinder(grid, words) {
	if (!grid.length) {
		return []
	}  
	let rows = grid.map((row) => row.join(""))
	let cols = grid[0].map((_, c) => grid.map((row) => row[c]).join(""))
	let lines = rows.concat(cols)

	return words.filter((word) => lines.some((line) => line.includes(word)))
}

const grid = [
  ["c", "a", "t"],
  ["a", "a", "t"],
  ["r", "a", "t"],
  ["d", "o", "g"],
];

console.log(
  gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"]),
);
console.log(gridWordsFinder(grid, []));