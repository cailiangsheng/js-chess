import _ from 'lodash'
import CONSTS from './consts'

const isValidPosition = (position) => {
  if (!position) return false
  const {rowIndex, cellIndex} = position
  return rowIndex >= 0 && rowIndex < CONSTS.NUM_ROWS
    && cellIndex >=0 && cellIndex < CONSTS.NUM_CELLS
}

const isJiangPosition = ({rowIndex, cellIndex}) => {
  return [0, 1, 2, 7, 8, 9].includes(rowIndex) && [3, 4, 5].includes(cellIndex)
}

const isShiPosition = ({rowIndex, cellIndex}) => {
  return [0, 2, 7, 9].includes(rowIndex) && [3, 5].includes(cellIndex)
    || [1, 8].includes(rowIndex) && cellIndex === 4
}

const isXiangPosition =({rowIndex, cellIndex}) => {
  return [0, 4, 5, 9].includes(rowIndex) && [2, 6].includes(cellIndex)
    || [2, 7].includes(rowIndex) && [0, 4, 8].includes(cellIndex)
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

const findPosition = (positions, position) => {
  return positions.find(pos => isSamePosition(pos, position))
}

export {
  needsTattoo,
  findChessMan,
  findPosition,
  isSamePosition,
  isValidPosition,
  isJiangPosition,
  isShiPosition,
  isXiangPosition
}
