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
  isXiangPosition
} from 'components/chess-grid/util'

import CONSTS from 'components/chess-man/consts'

const canGo = (from, to) => {
  if (!from || !to) return false

  if (isSameColor(from.name, to.name)) return false

  const fromPosition = from.position
  const toPosition = to.position

  if (!isValidPosition(fromPosition) || !isValidPosition(toPosition)) return false

  if (isSamePosition(fromPosition, toPosition)) return false

  const deltaPosition = getDeltaPosition(fromPosition, toPosition)

  switch (getType(from.name)) {
    case CONSTS.TYPE.JU:
      return canGoJu(fromPosition, toPosition, deltaPosition)
    case CONSTS.TYPE.MA:
      return canGoMa(fromPosition, toPosition, deltaPosition)
    case CONSTS.TYPE.PAO:
      return canGoPao(fromPosition, toPosition, deltaPosition)
    case CONSTS.TYPE.XIANG:
      return canGoXiang(fromPosition, toPosition, deltaPosition)
    case CONSTS.TYPE.SHI:
      return canGoShi(fromPosition, toPosition, deltaPosition)
    case CONSTS.TYPE.JIANG:
      return canGoJiang(fromPosition, toPosition, deltaPosition)
    case CONSTS.TYPE.ZU:
      return canGoZu(fromPosition, toPosition, deltaPosition)
    default:
      return false
  }
}

const getDeltaPosition = (position1, position2) => ({
  rowIndex: Math.abs(position1.rowIndex - position2.rowIndex),
  cellIndex: Math.abs(position1.cellIndex - position2.cellIndex)
})

const canGoStraight = (deltaPosition) => {
  return deltaPosition.rowIndex * deltaPosition.cellIndex === 0
}

const canGoStraightByOneStep = (deltaPosition) => {
  return deltaPosition.rowIndex + deltaPosition.cellIndex === 1
}

const canGoSlantByOneStep = (deltaPosition) => {
  return deltaPosition.rowIndex * deltaPosition.cellIndex === 1
}

const canGoJu = (fromPosition, toPosition, deltaPosition) => {
  return canGoStraight(deltaPosition)
}

const canGoMa = (fromPosition, toPosition, deltaPosition) => {
  return deltaPosition.rowIndex * deltaPosition.cellIndex === 2
}

const canGoPao = (fromPosition, toPosition, deltaPosition) => {
  return canGoStraight(deltaPosition)
}

const canGoXiang = (fromPosition, toPosition, deltaPosition) => {
  if (!isXiangPosition(fromPosition)) {
    throw new Error('XIANG is at invalid position')
  } else if (!isXiangPosition(toPosition)) {
    return false
  } else {
    return deltaPosition.rowIndex === 2 && deltaPosition.cellIndex === 2
  }
}

const canGoShi = (fromPosition, toPosition, deltaPosition) => {
  if (!isShiPosition(fromPosition)) {
    throw new Error('SHI is at invalid position')
  } else if (!isShiPosition(toPosition)) {
    return false
  } else {
    return canGoSlantByOneStep(deltaPosition)
  }
}

const canGoJiang = (fromPosition, toPosition, deltaPosition) => {
  if (!isJiangPosition(fromPosition)) {
    throw new Error('JIANG is at invalid position')
  } else if (!isJiangPosition(toPosition)) {
    return false
  } else {
    return canGoStraightByOneStep(deltaPosition)
  }
}

const canGoZu = (fromPosition, toPosition, deltaPosition) => {
  return canGoStraightByOneStep(deltaPosition)
}

export {
  canGo
}
