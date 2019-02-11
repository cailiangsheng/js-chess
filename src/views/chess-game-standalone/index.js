import React from 'react'
import PropTypes from 'prop-types'
import BasicButton from 'components/button/basic'
import ChessGame, { store, updateChessState } from 'components/chess-game'
import AI from './ai'
import './style.less'

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
    this.ai = this.ai || new AI(this._updateState)
    this.ai.handleStateChange(state)
  }

  _updateState = (state) => {
    store.dispatch(updateChessState(state))
  }

  _onRestart = () => {
    this.ai && this.ai.restart()
  }

  _onRetract = () => {
    this.ai && this.ai.retract()
  }

  render() {
    // const { viewColor } = match.params
    const viewColor = 'red'
    const actionColor = viewColor
    return <div className='chess-game-standalone'>
      <ChessGame viewColor={viewColor} actionColor={actionColor} />
      <div className='buttons'>
        <BasicButton label='新局' onClick={this._onRestart} />
        <BasicButton label='悔棋' onClick={this._onRetract} />
      </div>
    </div>
  }
}

ChessGameStandalone.props = {
  match: PropTypes.object
}

export default ChessGameStandalone
