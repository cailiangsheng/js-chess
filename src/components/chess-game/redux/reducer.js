import _ from 'lodash'
import {CLICK_CHESS_GRID} from './actions'
import {findChessMan} from 'components/chess-grid/util'

import {
  isValid,
  getColor,
  getDifferentColor
} from 'components/chess-man/util'

import {
  canGo,
  getWinnerColor,
  getSteppingPositions
} from '../util'

import CHESSMANS from '../chessmans'

const initialState = {
  chessmans: CHESSMANS,
  activeChessman: null,
  steppedPositions: [],
  steppingPositions: [],
  winnerColor: '',
  playerColor: ''
}

const newPlayerColor = (state, chessman) => {
  return getDifferentColor(state.playerColor || getColor(chessman.name))
}

const canActivate = (state, target) => {
  if (!isValid(target.name)) return false

  const {playerColor} = state
  const targetColor = getColor(target.name)
  return !playerColor || playerColor === targetColor
}

const clickTarget = (state, target) => {
  const {chessmans, activeChessman, winnerColor} = state
  if (winnerColor) {
    return state
  } else if (canActivate(state, target)) {
    return activateTarget(state, target)
  } else if(canGo(activeChessman, target, chessmans)) {
    return goToTarget(state, target)
  } else {
    return state
  }
}

const activateTarget = (state, target) => {
  return Object.assign({}, state, {
    activeChessman: target,
    playerColor: getColor(target.name),
    steppingPositions: getSteppingPositions(target, state.chessmans)
  })
}

const goToTarget = (state, target) => {
  let chessmans = _.cloneDeep(state.chessmans)

  const chessmanKilled = findChessMan(
    chessmans,
    target.position
  )
  chessmans = _.without(chessmans, chessmanKilled)

  const fromPosition = state.activeChessman.position
  const toPosition = target.position
  const steppedPositions = [fromPosition, toPosition]
  const chessmanGoing = findChessMan(chessmans, fromPosition)
  chessmanGoing.position = toPosition

  return {
    chessmans,
    activeChessman: null,
    playerColor: newPlayerColor(state, chessmanGoing),
    steppingPositions: [],
    steppedPositions,
    winnerColor: getWinnerColor(chessmans)
  }
}

const clickChessGrid = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CHESS_GRID:
      return clickTarget(state, action.target)
    default:
      return state
  }
}

export default clickChessGrid

export {
  clickTarget,
  initialState
}
