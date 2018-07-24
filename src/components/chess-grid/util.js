import _ from 'lodash'
import CONSTS from './consts'

const isValidPosition = (position) => {
  if (!position) return false
  const {rowIndex, cellIndex} = position
  return rowIndex >= 0 && rowIndex < CONSTS.NUM_ROWS
    && cellIndex >=0 && cellIndex < CONSTS.NUM_COLUMNS
}

const isPaoPosition = ({rowIndex, cellIndex}) => {
  return [2, 7].includes(rowIndex) && [1, 7].includes(cellIndex)
}

const isZuPosition = ({rowIndex, cellIndex}) => {
  return [3, 6].includes(rowIndex) && [0, 2, 4, 6, 8].includes(cellIndex)
}

const needsTattoo = (position) => {
  return isPaoPosition(position) || isZuPosition(position)
}

const isSamePosition = (position1, position2) => {
  return position1 && position2 && _.isEqual(position1, position2)
}

const findChessMan = (chessmans, position) => {
  return chessmans.find(chessman => isSamePosition(chessman.position, position))
}

export {
  needsTattoo,
  findChessMan,
  isSamePosition,
  isValidPosition
}
