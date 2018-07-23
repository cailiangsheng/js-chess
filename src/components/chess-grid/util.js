import CONSTS from './consts'

const isValidPosition = ({rowIndex, cellIndex}) => {
  return rowIndex >= 0 && rowIndex < CONSTS.NUM_ROWS
    && cellIndex >=0 && cellIndex < CONSTS.NUM_COLUMNS
}

const isPaoPosition = ({rowIndex, cellIndex}) => {
  return [2, 7].includes(rowIndex) && [1, 7].includes(cellIndex)
}

const isZuPosition = ({rowIndex, cellIndex}) => {
  return [3, 6].includes(rowIndex) && [0, 2, 4, 6, 8].includes(cellIndex)
}

const needsTattoo = ({rowIndex, cellIndex}) => {
  return isPaoPosition(rowIndex, cellIndex)
    || isZuPosition(rowIndex, cellIndex)
}

const findChessMan = (chessmans, {rowIndex, cellIndex}) => {
  return chessmans.find(chessman =>
    chessman.position.rowIndex === rowIndex && 
    chessman.position.cellIndex === cellIndex
  )
}

export {
  needsTattoo,
  findChessMan,
  isValidPosition
}
