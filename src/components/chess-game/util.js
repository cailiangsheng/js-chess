import _ from 'lodash'

import {
  isSameColor,
  getType
} from 'components/chess-man/util'

import {
  isValidPosition,
  isSamePosition,
  isJiangPosition,
  isShiPosition,
  isXiangPosition,
  findChessMan
} from 'components/chess-grid/util'

import CONSTS from 'components/chess-man/consts'

const canGo = (from, to, chessmans = []) => {
  if (!from || !to) return false

  if (isSameColor(from.name, to.name)) return false

  const fromPosition = from.position
  const toPosition = to.position

  if (!isValidPosition(fromPosition) || !isValidPosition(toPosition)) return false

  if (isSamePosition(fromPosition, toPosition)) return false

  const differ = differPositions({fromPosition, toPosition})
  const params = {fromPosition, toPosition, differ, chessmans}

  switch (getType(from.name)) {
    case CONSTS.TYPE.JU:
      return canGoJu(params)
    case CONSTS.TYPE.MA:
      return canGoMa(params)
    case CONSTS.TYPE.PAO:
      return canGoPao(params)
    case CONSTS.TYPE.XIANG:
      return canGoXiang(params)
    case CONSTS.TYPE.SHI:
      return canGoShi(params)
    case CONSTS.TYPE.JIANG:
      return canGoJiang(params)
    case CONSTS.TYPE.ZU:
      return canGoZu(params)
    default:
      return false
  }
}

const differPositions = ({fromPosition, toPosition}) => ({
  deltaRow: Math.abs(toPosition.rowIndex - fromPosition.rowIndex),
  deltaCell: Math.abs(toPosition.cellIndex - fromPosition.cellIndex),
  stepRow: Math.sign(toPosition.rowIndex - fromPosition.rowIndex),
  stepCell: Math.sign(toPosition.cellIndex - fromPosition.cellIndex),
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

const countBlockers = ({fromPosition, toPosition, differ, chessmans}) => {
  const numSteps = Math.max(differ.deltaRow, differ.deltaCell) - 1
  const position = {
    rowIndex: fromPosition.rowIndex,
    cellIndex: fromPosition.cellIndex
  }
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

const canGoJu = (params) => {
  return isStraight(params.differ) && countBlockers(params) === 0
}

const canGoMa = ({fromPosition, toPosition, differ, chessmans}) => {
  return differ.deltaRow * differ.deltaCell === 2
}

const canGoPao = ({fromPosition, toPosition, differ, chessmans}) => {
  return isStraight(differ)
}

const canGoXiang = ({fromPosition, toPosition, differ, chessmans}) => {
  if (!isXiangPosition(fromPosition)) {
    throw new Error('XIANG is at invalid position')
  } else if (!isXiangPosition(toPosition)) {
    return false
  } else {
    return differ.deltaRow === 2 && differ.deltaCell === 2
  }
}

const canGoShi = ({fromPosition, toPosition, differ, chessmans}) => {
  if (!isShiPosition(fromPosition)) {
    throw new Error('SHI is at invalid position')
  } else if (!isShiPosition(toPosition)) {
    return false
  } else {
    return isSlantByOneStep(differ)
  }
}

const canGoJiang = ({fromPosition, toPosition, differ, chessmans}) => {
  if (!isJiangPosition(fromPosition)) {
    throw new Error('JIANG is at invalid position')
  } else if (!isJiangPosition(toPosition)) {
    return false
  } else {
    return isStraightByOneStep(differ)
  }
}

const canGoZu = ({fromPosition, toPosition, differ, chessmans}) => {
  return isStraightByOneStep(differ)
}

export {
  canGo
}
