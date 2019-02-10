
import { ChessAI, move2Iccs, MOVE } from '../../../../js-chess-ai/dist/ai'
import { fromFen, toFen, fromIccs, toIccs } from '../../../../js-chess-ai/test/chessmans'
import { getWinnerColor } from '../../../../js-chess-ai/test/result'
import { iccs2sqs } from '../../../../js-chess-ai/test/iccs'

class AI {
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

  handleStateChange(state, updateState) {
    if (state.playerColor === 'black') {
      const iccs = toIccs(state.steppedPositions)
      const sqs = iccs2sqs(iccs)
      const mv = MOVE(sqs[0], sqs[1])
      const ai = this._getAI()
      if (!ai.pos.legalMove(mv) || !ai.pos.makeMove(mv)) {
        updateState({
          ...state,
          playerColor: '',
          winnerColor: 'black'
        })
        return
      }
      const fen = toFen(state.chessmans)
      ai.pos.fromFen(fen + ' b')
      ai.onAddMove = function () {
        const fen = ai.pos.toFen()
        const iccs = move2Iccs(ai.mvLast)
        updateState({
          chessmans: fromFen(fen),
          playerColor: 'red',
          activeChessman: null,
          steppingPositions: [],
          steppedPositions: fromIccs(iccs),
          winnerColor: getWinnerColor(ai)
        })
      }
      const winnerColor = getWinnerColor(ai)
      if (winnerColor) {
        updateState({
          ...state,
          playerColor: '',
          winnerColor
        })
      } else {
        ai.response()
      }
    }
  }
}

export default AI
