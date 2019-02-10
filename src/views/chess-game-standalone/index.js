import React from 'react'
import PropTypes from 'prop-types'
import ChessGame, { store, updateChessState } from 'components/chess-game'
import AI from './ai'

class ChessGameStandalone extends React.Component {
  constructor(props) {
    super(props)
    this._init(this.props)
  }

  _init = (props) => {
    store.subscribe(this._onStateChange)
  }

  _onStateChange = () => {
    const state = store.getState().chessGame
    this.ai = this.ai || new AI()
    this.ai.handleStateChange(state, this._updateState)
  }

  _updateState = (state) => {
    store.dispatch(updateChessState(state))
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
