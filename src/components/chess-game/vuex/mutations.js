import _ from 'lodash'
import {CLICK_CHESS_GRID} from './actions'
import {findChessMan} from 'components/chess-grid/util'
import {isValid, isSameColor} from 'components/chess-man/util'
import {canGo, isGameOver, getWinnerColor, getSteppingPositions} from '../util'
import CHESSMANS from '../chessmans'

const initialState = {
  chessmans: CHESSMANS,
  activeChessman: null,
  playedChessman: null,
  steppedPositions: [],
  steppingPositions: [],
  winnerColor: ''
}

const canActivate = (state, target) => {
  if (!isValid(target.name)) return false

  const {activeChessman, playedChessman} = state
  return !activeChessman && !playedChessman
    || !activeChessman && !isSameColor(playedChessman.name, target.name)
    || activeChessman && isSameColor(activeChessman.name, target.name)
}

const clickTarget = (state, target) => {
  const {chessmans, activeChessman, winnerColor} = state
  if (winnerColor) {
    // do nothing
  } else if (canActivate(state, target)) {
    activateTarget(state, target)
  } else if(canGo(activeChessman, target, chessmans)) {
    goToTarget(state, target)
  } else {
    // do nothing
  }
}

const activateTarget = (state, target) => {
  Object.assign(state, {
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

  Object.assign(state, {
    chessmans,
    activeChessman: null,
    playedChessman: chessmanGoing,
    steppingPositions: [],
    steppedPositions,
    winnerColor: getWinnerColor(chessmans)
  })
}

const mutations = {
  clickChessGrid: clickTarget
}

export {
  mutations,
  initialState
}
