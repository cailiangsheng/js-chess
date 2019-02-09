import React from 'react'
import PropTypes from 'prop-types'
import ChessGame, { store, updateChessState } from 'components/chess-game'
import { ChessAI, move2Iccs } from '../../../../js-chess-ai/dist/ai'
import { fromFen, toFen, fromIccs } from '../../../../js-chess-ai/test/chessmans'

class ChessGameStandalone extends React.Component {
  constructor(props) {
    super(props)
    this._init(this.props)
  }

  _init = (props) => {
    this._initStore()
  }

  _initStore = () => {
    store.subscribe(this._onStateChange)
  }

  _getAI = () => {
    var ai = new ChessAI();
    ai.setSearch(16);
    ai.setLevel(2); // ai.millis = 10;
    ai.computer = 1;
    return ai
  }

  _onStateChange = () => {
    const state = store.getState().chessGame
    if (state.playerColor === 'black') {
      const fen = toFen(state.chessmans)
      const ai = this._getAI()
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
          winnerColor: ''
        }))
      }
      ai.response()
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
