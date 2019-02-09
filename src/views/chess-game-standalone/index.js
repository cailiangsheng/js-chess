import React from 'react'
import PropTypes from 'prop-types'
import ChessGame, { store, updateChessState } from 'components/chess-game'
import { ChessAI, move2Iccs, MOVE } from '../../../../js-chess-ai/dist/ai'
import { fromFen, toFen, fromIccs, toIccs } from '../../../../js-chess-ai/test/chessmans'
import { getWinnerColor } from '../../../../js-chess-ai/test/result'
import { iccs2sqs } from '../../../../js-chess-ai/test/iccs'

class ChessGameStandalone extends React.Component {
  constructor(props) {
    super(props)
    this._init(this.props)
  }

  _init = (props) => {
    store.subscribe(this._onStateChange)
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

  _onStateChange = () => {
    const state = store.getState().chessGame
    if (state.playerColor === 'black') {
      const iccs = toIccs(state.steppedPositions)
      const sqs = iccs2sqs(iccs)
      const mv = MOVE(sqs[0], sqs[1])
      const ai = this._getAI()
      if (!ai.pos.legalMove(mv) || !ai.pos.makeMove(mv)) {
        store.dispatch(updateChessState({
          ...state,
          playerColor: '',
          winnerColor: 'black'
        }))
        return
      }
      const fen = toFen(state.chessmans)
      ai.pos.fromFen(fen + ' b')
      ai.onAddMove = function () {
        const fen = ai.pos.toFen()
        const iccs = move2Iccs(ai.mvLast)
        store.dispatch(updateChessState({
          chessmans: fromFen(fen),
          playerColor: 'red',
          activeChessman: null,
          steppingPositions: [],
          steppedPositions: fromIccs(iccs),
          winnerColor: getWinnerColor(ai)
        }))
      }
      const winnerColor = getWinnerColor(ai)
      if (winnerColor) {
        store.dispatch(updateChessState({
          ...state,
          playerColor: '',
          winnerColor
        }))
      } else {
        ai.response()
      }
    }
  }

  render() {
    // const { viewColor } = match.params
    const viewColor = 'red'
    const actionColor = viewColor
    return <ChessGame viewColor={viewColor} actionColor={actionColor} />
  }
}

ChessGameStandalone.props = {
  match: PropTypes.object
}

export default ChessGameStandalone
