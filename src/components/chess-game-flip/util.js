import _ from 'lodash'

import {
  isSameColor,
  getType,
  getColor,
  getName
} from 'components/chess-man/util'

// TODO: move into common util
import {
  isValidPosition,
  isSamePosition,
  findChessMan
} from 'components/chess-grid/util'

import CHESS_MAN from 'components/chess-man/consts'

import CHESS_GRID from 'components/chess-grid-flip/consts'

// TODO: move to common util
const getSteppingPositions = (from, chessmans) => {
  const positions = []
  for (let i = 0; i < CHESS_GRID.NUM_ROWS; i++) {
    for (let j = 0; j < CHESS_GRID.NUM_CELLS; j++) {
      const position = { rowIndex: i, cellIndex: j }
      const chessman = findChessMan(chessmans, position)
      const name = chessman && chessman.name
      const to = { position, name }
      if (canGo(from, to, chessmans)) {
        positions.push(to.position)
      }
    }
  }
  return positions
}

const getWinnerColor = (chessmans = []) => {
  return ''
}

// TODO: can move part of the code into common util
const canGo = (from, to, chessmans = []) => {
  if (!from || !to) {
	return false
  }

  if (isSameColor(from.name, to.name)) return false

  if (!isValidPosition(from.position, CHESS_GRID)
  	|| !isValidPosition(to.position, CHESS_GRID)) {
	return false
  }

  if (isSamePosition(from.position, to.position)) {
	return false
  }

  const differ = differPositions({from, to})
  const params = {from, to, differ, chessmans}

  switch (getType(from.name)) {
    case CHESS_MAN.TYPE.JU:


    case CHESS_MAN.TYPE.MA:
    case CHESS_MAN.TYPE.XIANG:
    case CHESS_MAN.TYPE.SHI:
    case CHESS_MAN.TYPE.JIANG:
	  case CHESS_MAN.TYPE.ZU:
		  return isStraightByOneStep(params.differ)
    case CHESS_MAN.TYPE.PAO:
      return canGoPao(params)
    default:
      return false
  }
}

const canJuEat = (toType) => {
  return [
    CHESS_MAN.TYPE.JU,
    CHESS_MAN.TYPE.MA,
    CHESS_MAN.TYPE.PAO,
    CHESS_MAN.TYPE.ZU
  ].includes(toType)
}

const canMaEat = (toType) => {
  return [
    CHESS_MAN.TYPE.MA,
    CHESS_MAN.TYPE.PAO,
    CHESS_MAN.TYPE.ZU
  ].includes(toType)
}

const canZuEat = (toType) => {
  return [
    CHESS_MAN.TYPE.JIANG,
    CHESS_MAN.TYPE.ZU
  ].includes(toType)
}

const differPositions = ({from, to}) => ({
  deltaRow: Math.abs(to.position.rowIndex - from.position.rowIndex),
  deltaCell: Math.abs(to.position.cellIndex - from.position.cellIndex),
  stepRow: Math.sign(to.position.rowIndex - from.position.rowIndex),
  stepCell: Math.sign(to.position.cellIndex - from.position.cellIndex),
})

const isStraight = (differ) => {
  return differ.deltaRow * differ.deltaCell === 0
}

const isStraightByOneStep = (differ) => {
  return differ.deltaRow + differ.deltaCell === 1
}

const isSlantByOneStep = (differ) => {
  return differ.deltaRow * differ.deltaCell === 1
}

const countStraightBlockers = ({from, to, differ, chessmans}) => {
  const numSteps = Math.max(differ.deltaRow, differ.deltaCell) - 1
  const position = _.cloneDeep(from.position)
  let numBlockers = 0
  for (let i = 0; i < numSteps; i++) {
    position.rowIndex += differ.stepRow
    position.cellIndex += differ.stepCell
    if (findChessMan(chessmans, position)) {
      numBlockers++
    }
  }
  return numBlockers
}

const canGoPao = (params) => {
  const isEmptyTarget = !params.to.name
  return isStraight(params.differ) && (
    isEmptyTarget && countStraightBlockers(params) === 0 ||
    !isEmptyTarget && countStraightBlockers(params) === 1
  )
}

export {
  canGo,
  getWinnerColor,
  getSteppingPositions
}
