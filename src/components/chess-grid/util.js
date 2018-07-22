const isPaoPosition = (rowIndex, cellIndex) => {
  return [2, 7].includes(rowIndex) && [1, 7].includes(cellIndex)
}

const isZuPosition = (rowIndex, cellIndex) => {
  return [3, 6].includes(rowIndex) && [0, 2, 4, 6, 8].includes(cellIndex)
}

const needsTattoo = (rowIndex, cellIndex) => {
  return isPaoPosition(rowIndex, cellIndex)
    || isZuPosition(rowIndex, cellIndex)
}

const findChessMan = (chessmans, rowIndex, cellIndex) => {
  return chessmans.find(chessman =>
    chessman.rowIndex === rowIndex && chessman.cellIndex === cellIndex
  )
}

export {
  needsTattoo,
  findChessMan
}
