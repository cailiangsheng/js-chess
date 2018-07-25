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

const canGo = (from, to, chessmans = []) => {
  if (!from || !to) return false

  if (isSameColor(from.name, to.name)) return false

  const fromPosition = from.position
  const toPosition = to.position

  if (!isValidPosition(fromPosition) || !isValidPosition(toPosition)) return false

  if (isSamePosition(fromPosition, toPosition)) return false

  const differ = differPositions(fromPosition, toPosition)
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

const differPositions = (position1, position2) => ({
  deltaRow: Math.abs(position1.rowIndex - position2.rowIndex),
  deltaCell: Math.abs(position1.cellIndex - position2.cellIndex),
  stepRow: Math.sign(position1.rowIndex - position2.rowIndex),
  stepCell: Math.sign(position1.cellIndex - position2.cellIndex),
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

const canGoJu = ({fromPosition, toPosition, differ, chessmans}) => {
  if (!isStraight(differ)) return false

  const blockerPositions = []
  if (differ.deltaRow === 0) {
    // TODO
  }
  return true
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
