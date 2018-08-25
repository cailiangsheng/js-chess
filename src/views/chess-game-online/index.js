import React from 'react'
import PropTypes from 'prop-types'
import ChessGame, { store, updateChessState } from 'components/chess-game'
import getSocket from 'lib/socket'

class ChessGameOnline extends React.Component {
  constructor (props) {
    super(props)
    this._initSocket()
    this._initStore()
  }

  _initSocket = () => {
    const {viewColor, roomId, roomToken} = this.props.match.params
    const socket = getSocket()
    socket.on('connect', () => {
      console.log('Connected to server')

      socket.emit('enterRoom', {
        viewColor,
        roomId,
        roomToken
      })
    })

    socket.on('enterRoom', (data) => {
      console.log(`Socket[${data.socketId}] entered room[${data.roomId}]`)
      this._sendState()
    })

    socket.on('leaveRoom', (data) => {
      console.log(`Socket[${data.socketId}] left room[${data.roomId}]`)
    })

    socket.on('updateState', (data) => {
      console.log(`Socket[${data.socketId}] updated state`, data.state)
      this._updateState(data.state)
    })
  }

  _initStore = () => {
    store.subscribe(this._sendState)
  }

  _sendState = () => {
    if (this.isUpdatingState) return

    const {roomId} = this.props.match.params
    const state = store.getState().chessGame
    const socket = getSocket()
    socket.emit('updateState', {
      roomId,
      state
    })
  }

  _updateState = (state) => {
    this.isUpdatingState = true
    store.dispatch(updateChessState(state))
    this.isUpdatingState = false
  }

  render () {
    const {viewColor} = this.props.match.params
    return <ChessGame viewColor={viewColor} actionColor={viewColor} />
  }
}

ChessGameOnline.props = {
  match: PropTypes.object
}

export default ChessGameOnline
