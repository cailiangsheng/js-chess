import {
  isSameColor,
  getType
} from 'components/chess-man/util'

import {
  isValidPosition
} from 'components/chess-grid/util'

import CONSTS from 'components/chess-man/consts'

const canGo = (from, to) => {
  if (!from || !to) return false

  if (isSameColor(from.name, to.name)) return false

  if (isSamePosition(from.position, to.position)) return false

  if (!isValidPosition(from.position) || !isValidPosition(to.position)) return false

  switch (getType(from.name)) {
    case CONSTS.TYPE.JU:
      return canGoJu(from, to)
    case CONSTS.TYPE.MA:
      return canGoMa(from, to)
    case CONSTS.TYPE.PAO:
      return canGoPao(from, to)
    case CONSTS.TYPE.XIANG:
      return canGoXiang(from, to)
    case CONSTS.TYPE.SHI:
      return canGoShi(from, to)
    case CONSTS.TYPE.JIANG:
      return canGoJiang(from, to)
    case CONSTS.TYPE.ZU:
      return canGoZu(from, to)
    default:
      return false
  }
}

const isSamePosition = (position1, position2) => {
  return position1 && position2
    && position1.rowIndex === position2.rowIndex
    && position1.cellIndex === position2.cellIndex
}

const canGoJu = (from, to) => {
  return true
}

const canGoMa = (from, to) => {
  return true
}

const canGoPao = (from, to) => {
  return true
}

const canGoXiang = (from, to) => {
  return true
}

const canGoShi = (from, to) => {
  return true
}

const canGoJiang = (from, to) => {
  return true
}

const canGoZu = (from, to) => {
  return true
}

export {
  canGo
}
