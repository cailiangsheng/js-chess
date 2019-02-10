
import {
  ChessAI,
  move2Iccs,
  MOVE
} from '../../../../js-chess-ai/dist/ai'

import {
  fromFen,
  toFen,
  fromIccs,
  toIccs,
  getWinnerColor,
  iccs2sqs
} from '../../../../js-chess-ai/util'

class AI {
  constructor(updateState) {
    this.updateState = updateState
  }

  _getAI = () => {
    if (!this.ai) {
      var ai = new ChessAI();
      ai.setSearch(16);
      ai.setLevel(2); // ai.millis = 10;
      ai.computer = 1;
      this.ai = ai;
    }
    return this.ai;
  }

  _refreshState = () => {
    const ai = this._getAI()
    const fen = ai.pos.toFen()
    const iccs = move2Iccs(ai.mvLast)
    this.updateState({
      chessmans: fromFen(fen),
      playerColor: 'red',
      activeChessman: null,
      steppingPositions: [],
      steppedPositions: fromIccs(iccs),
      winnerColor: getWinnerColor(ai)
    })
  }

  _finalState = (state, winnerColor) => {
    this.updateState({
      ...state,
      playerColor: '',
      winnerColor
    })
  }

  _isBadMove = (iccs) => {
    const ai = this._getAI()
    const sqs = iccs2sqs(iccs)
    const mv = MOVE(sqs[0], sqs[1])
    return !ai.pos.legalMove(mv) || !ai.pos.makeMove(mv)
  }

  handleStateChange(state) {
    if (state.playerColor === 'black') {
      const ai = this._getAI()
      const iccs = toIccs(state.steppedPositions)
      if (this._isBadMove(iccs)) {
        this._finalState(state, 'black')
        return
      }
      ai.onAddMove = (function () {
        this._refreshState()
      }).bind(this)
      const winnerColor = getWinnerColor(ai)
      if (winnerColor) {
        this._finalState(state, winnerColor)
      } else {
        ai.response()
      }
      iccs2sqs(iccs).forEach((sq) => ai.clickSquare(sq))
    }
  }

  retract() {
    this.ai.retract()
    this._refreshState()
  }
}

export default AI
