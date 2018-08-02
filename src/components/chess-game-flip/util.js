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

const hideChessmans = (chessmans) => {
  return _.map(chessmans, hideChessman)
}

const hideChessman = (chessman) => Object.assign(chessman, {
  isHidden: true
})

const showChessman = (chessman) => Object.assign(chessman, {
  isHidden: false
})

const shuffleChessmans = (chessmans) => {
  const positions = _.map(chessmans, 'position')
  const shuffledPositions = _.shuffle(positions)
  return _.map(chessmans, (chessman, index) => ({
    name: chessman.name,
    position: shuffledPositions[index]
  }))
}

// TODO: move to common util
const getSteppingPositions = (from, chessmans) => {
  const positions = []
  for (let i = 0; i < CHESS_GRID.NUM_ROWS; i++) {
    for (let j = 0; j < CHESS_GRID.NUM_CELLS; j++) {
      const position = { rowIndex: i, cellIndex: j }
      const chessman = findChessMan(chessmans, position)
      const to = chessman ? chessman : { position }
      if (canGo(from, to, chessmans)) {
        positions.push(to.position)
      }
    }
  }
  return positions
}

const getWinnerColor = (chessmans = []) => {
  const numRedChessmans = _.filter(chessmans, (chessman) => getColor(chessman.name) === CHESS_MAN.COLOR.RED).length
  const numBlackChessmans = _.filter(chessmans, (chessman) => getColor(chessman.name) === CHESS_MAN.COLOR.BLACK).length
  if (numRedChessmans > 0 && numBlackChessmans === 0) {
    return CHESS_MAN.COLOR.RED
  } else if (numRedChessmans === 0 && numBlackChessmans > 0) {
    return CHESS_MAN.COLOR.BLACK
  } else if (numRedChessmans === 0 && numBlackChessmans === 0) {
    return CHESS_MAN.COLOR.INVALID
  } else {
    return ''
  }
}

// TODO: can move part of the code into common util
const canGo = (from, to, chessmans = []) => {
  if (!from || !to) return false

  if (to.isHidden) return false

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
  const toType = getType(to.name)
  let canEat = false

  switch (getType(from.name)) {
    case CHESS_MAN.TYPE.JU:
      canEat = canJuEat(toType)
      break
    case CHESS_MAN.TYPE.MA:
      canEat = canMaEat(toType)
      break
    case CHESS_MAN.TYPE.XIANG:
      canEat = canXiangEat(toType)
      break
    case CHESS_MAN.TYPE.SHI:
      canEat = canShiEat(toType)
      break
    case CHESS_MAN.TYPE.JIANG:
      canEat = canJiangEat(toType)
      break
	  case CHESS_MAN.TYPE.ZU:
      canEat = canZuEat(toType)
      break
    case CHESS_MAN.TYPE.PAO:
      return canGoPao(params)
    default:
      return false
  }
  return canEat && isStraightByOneStep(params.differ)
}

const canJiangEat = (toType) => {
  return toType !== CHESS_MAN.TYPE.ZU
}

const canShiEat = (toType) => {
  return [
    CHESS_MAN.TYPE.SHI,
    CHESS_MAN.TYPE.XIANG,
    CHESS_MAN.TYPE.JU,
    CHESS_MAN.TYPE.MA,
    CHESS_MAN.TYPE.PAO,
    CHESS_MAN.TYPE.ZU,
    CHESS_MAN.TYPE.INVALID
  ].includes(toType)
}

const canXiangEat = (toType) => {
  return [
    CHESS_MAN.TYPE.XIANG,
    CHESS_MAN.TYPE.JU,
    CHESS_MAN.TYPE.MA,
    CHESS_MAN.TYPE.PAO,
    CHESS_MAN.TYPE.ZU,
    CHESS_MAN.TYPE.INVALID
  ].includes(toType)
}

const canJuEat = (toType) => {
  return [
    CHESS_MAN.TYPE.JU,
    CHESS_MAN.TYPE.MA,
    CHESS_MAN.TYPE.PAO,
    CHESS_MAN.TYPE.ZU,
    CHESS_MAN.TYPE.INVALID
  ].includes(toType)
}

const canMaEat = (toType) => {
  return [
    CHESS_MAN.TYPE.MA,
    CHESS_MAN.TYPE.PAO,
    CHESS_MAN.TYPE.ZU,
    CHESS_MAN.TYPE.INVALID
  ].includes(toType)
}

const canZuEat = (toType) => {
  return [
    CHESS_MAN.TYPE.JIANG,
    CHESS_MAN.TYPE.ZU,
    CHESS_MAN.TYPE.INVALID
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
    isEmptyTarget && isStraightByOneStep(params.differ) ||
    !isEmptyTarget && countStraightBlockers(params) === 1
  )
}

export {
  canGo,
  getWinnerColor,
  getSteppingPositions,
  shuffleChessmans,
  hideChessmans,
  showChessman
}
