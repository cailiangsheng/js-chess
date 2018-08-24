import React from 'react'
import PropTypes from 'prop-types'
import ChessGame, { store } from 'components/chess-game'
import socket from 'lib/socket'

class ChessGameOnline extends React.Component {
  constructor (props) {
    super(props)
    this._initSocket()
    this._initStore()
  }

  _initSocket = () => {
    const {viewColor, roomId, roomToken} = this.props.match.params
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
    })
  }

  _initStore = () => {
    store.subscribe(this._sendState)
  }

  _sendState = () => {
    const {roomId} = this.props.match.params
    const state = store.getState()
    socket.emit('updateState', {
      roomId,
      state
    })
  }

  render () {
    const {viewColor, roomId, roomToken} = this.props.match.params
    return <ChessGame />
  }
}

ChessGameOnline.props = {
  match: PropTypes.object
}

export default ChessGameOnline
