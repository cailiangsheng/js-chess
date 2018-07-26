import _ from 'lodash'

import {
  isSameColor,
  getType,
  getColor,
  getName
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

  if (!isValidPosition(from.position) || !isValidPosition(to.position)) return false

  if (isSamePosition(from.position, to.position)) return false

  const differ = differPositions({from, to})
  const params = {from, to, differ, chessmans}

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

const canGoJu = (params) => {
  return isStraight(params.differ) && countStraightBlockers(params) === 0
}

const canGoMa = ({from, to, differ, chessmans}) => {
  return differ.deltaRow * differ.deltaCell === 2 && (
    !findChessMan(chessmans,
      (
        differ.deltaRow > differ.deltaCell
        ? {rowIndex: from.position.rowIndex + differ.stepRow, cellIndex: from.position.cellIndex}
        : {rowIndex: from.position.rowIndex, cellIndex: from.position.cellIndex + differ.stepCell}
      )
    )
  )
}

const canGoPao = (params) => {
  const isEmptyTarget = !params.to.name
  return isStraight(params.differ) && (
    isEmptyTarget && countStraightBlockers(params) === 0 ||
    !isEmptyTarget && countStraightBlockers(params) === 1
  )
}

const canGoXiang = ({from, to, differ, chessmans}) => {
  if (!isXiangPosition(from.position)) {
    throw new Error('XIANG is at invalid position')
  } else if (!isXiangPosition(to.position)) {
    return false
  } else {
    return differ.deltaRow === 2 && differ.deltaCell === 2 && (
      !findChessMan(chessmans, {
        rowIndex: from.position.rowIndex + differ.stepRow,
        cellIndex: from.position.cellIndex + differ.stepCell
      })
    )
  }
}

const canGoShi = ({from, to, differ, chessmans}) => {
  if (!isShiPosition(from.position)) {
    throw new Error('SHI is at invalid position')
  } else if (!isShiPosition(to.position)) {
    return false
  } else {
    return isSlantByOneStep(differ)
  }
}

const canGoJiang = ({from, to, differ, chessmans}) => {
  if (!isJiangPosition(from.position)) {
    throw new Error('JIANG is at invalid position')
  } else if (!isJiangPosition(to.position)) {
    return false
  } else {
    return isStraightByOneStep(differ)
  }
}

const canGoZu = ({from, to, differ, chessmans}) => {
  const jiangName = getName({color: getColor(from.name), type: CONSTS.TYPE.JIANG})
  const jiangChessman = chessmans.find(chessman => chessman.name === jiangName)
  if (!jiangChessman) {
    throw new Error('There\'s no ' + jiangName)
  }

  const differToJiang = differPositions({from, to: jiangChessman})
  return isStraightByOneStep(differ) && (
    differ.stepRow === -differToJiang.stepRow
  )
}

export {
  canGo
}
