function gridWordFinder2(grid, word) {
  if (!word) return []
  const letters = [...word]
  return grid.flatMap((row, y) =>
    row.flatMap((_, x) => {
      const found = []
      if (letters.every((ch, i) => row[x + i] === ch)) {
        found.push({ x, y, direction: 'horizontal' })
      }
      if (letters.every((ch, i) => grid[y + i]?.[x] === ch)) {
        found.push({ x, y, direction: 'vertical' })
      }
      return found
    }),
  )
}