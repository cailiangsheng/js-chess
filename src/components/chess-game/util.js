import _ from 'lodash'

import {
  isSameColor,
  getType
} from 'components/chess-man/util'

import {
  isValidPosition,
  isSamePosition
} from 'components/chess-grid/util'

import CONSTS from 'components/chess-man/consts'

const canGo = (from, to) => {
  if (!from || !to) return false

  if (isSameColor(from.name, to.name)) return false

  const fromPosition = from.position
  const toPosition = to.position

  if (!isValidPosition(fromPosition) || !isValidPosition(toPosition)) return false

  if (isSamePosition(fromPosition, toPosition)) return false

  switch (getType(from.name)) {
    case CONSTS.TYPE.JU:
      return canGoJu(fromPosition, toPosition)
    case CONSTS.TYPE.MA:
      return canGoMa(fromPosition, toPosition)
    case CONSTS.TYPE.PAO:
      return canGoPao(fromPosition, toPosition)
    case CONSTS.TYPE.XIANG:
      return canGoXiang(fromPosition, toPosition)
    case CONSTS.TYPE.SHI:
      return canGoShi(fromPosition, toPosition)
    case CONSTS.TYPE.JIANG:
      return canGoJiang(fromPosition, toPosition)
    case CONSTS.TYPE.ZU:
      return canGoZu(fromPosition, toPosition)
    default:
      return false
  }
}

const canGoJu = (fromPosition, toPosition) => {
  return fromPosition.rowIndex !== toPosition.rowIndex && fromPosition.cellIndex === toPosition.cellIndex
    || fromPosition.rowIndex === toPosition.rowIndex && fromPosition.cellIndex !== toPosition.cellIndex
}

const canGoMa = (fromPosition, toPosition) => {
  return true
}

const canGoPao = (fromPosition, toPosition) => {
  return true
}

const canGoXiang = (fromPosition, toPosition) => {
  return true
}

const canGoShi = (fromPosition, toPosition) => {
  return true
}

const canGoJiang = (fromPosition, toPosition) => {
  return true
}

const canGoZu = (fromPosition, toPosition) => {
  return true
}

export {
  canGo
}
