import _ from 'lodash'
import {CLICK_CHESS_GRID} from 'components/chess-game/redux/actions'
import {findChessMan} from 'components/chess-grid/util'
import {isValid, isSameColor} from 'components/chess-man/util'

import {
  canGo,
  getWinnerColor,
  getSteppingPositions,
  shuffleChessmans,
  hideChessmans,
  showChessman
} from '../util'

import CHESSMANS from '../chessmans'

const initialState = {
  chessmans: hideChessmans(shuffleChessmans(CHESSMANS)),
  activeChessman: null,
  playedChessman: null,
  steppedPositions: [],
  steppingPositions: [],
  winnerColor: ''
}

const canActivate = (state, target) => {
  if (!isValid(target.name)) return false

  const {activeChessman, playedChessman} = state
  const isHiddenTarget = target.isHidden
  return !activeChessman && !playedChessman
    || !activeChessman && (!isSameColorEx(playedChessman, target) || isHiddenTarget)
    || activeChessman && (isSameColorEx(activeChessman, target) || isHiddenTarget)
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
  const chessman = findChessMan(state.chessmans, target.position)
  showChessman(chessman)
  showChessman(target)
  return Object.assign({}, state, {
    activeChessman: target,
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
    playedChessman: chessmanGoing,
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
