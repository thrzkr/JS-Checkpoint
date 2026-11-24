function isSnakePath(grid) {
  const total = grid.flat().filter((cell) => cell === 1).length
  if (total === 0) return false
  const startY = grid.findIndex((row) => row.includes(1))
  const startX = grid[startY].indexOf(1)
  const seen = new Set()
  const visit = (x, y) => {
    const key = `${x},${y}`
    if (grid[y]?.[x] !== 1 || seen.has(key)) return
    seen.add(key)
    ;[[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => visit(x + dx, y + dy))
  }
  visit(startX, startY)
  return seen.size === total
}