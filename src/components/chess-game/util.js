import {
  isValid,
  isSameColor,
  getType
} from 'components/chess-man/util'
import CONSTS from 'components/chess-man/consts'

const canGo = (from, to) => {
  if (!from || !to) return false

  if (isSameColor(from.name, to.name)) return false

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
