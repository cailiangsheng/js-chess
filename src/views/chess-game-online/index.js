import React from 'react'
import PropTypes from 'prop-types'
import ChessGame, { store, updateChessState } from 'components/chess-game'
import createSocket from 'lib/socket'

class ChessGameOnline extends React.Component {
  constructor (props) {
    super(props)
    this.state = this._init(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.setState(this._init(nextProps))
  }

  _init = (props) => {
    const {viewColor, roomId, roomToken} = props.match.params
    let mode
    if (!viewColor || !roomId) {
      mode = 'entry'
      this.socket && this.socket.close()
    } else {
      mode = roomToken ? 'play' : 'watch'
      if (this.socket) {
        this.socket.open()
      } else {
        this.socket = this._initSocket()
      }
      this._initStore()
    }
    return {mode}
  }

  _initSocket = () => {
    const {viewColor, roomId, roomToken} = this.props.match.params
    const socket = createSocket()

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

    return socket
  }

  _initStore = () => {
    store.subscribe(this._sendState)
  }

  _sendState = () => {
    if (this.isUpdatingState) return

    const {roomId} = this.props.match.params
    const state = store.getState().chessGame
    const socket = this.socket

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

  _renderEntry = () => {
    return <span>TODO Entry</span>
  }

  _renderGame = ({viewColor, actionColor}) => {
    return <ChessGame viewColor={viewColor} actionColor={actionColor} />
  }

  render () {
    const {viewColor} = this.props.match.params
    const {mode} = this.state
    switch (mode) {
      case 'entry':
        return this._renderEntry()
      case 'watch':
        return this._renderGame({
          viewColor,
          actionColor: 'none'
        })
      case 'play':
        return this._renderGame({
          viewColor,
          actionColor: viewColor
        })
    }
  }
}

ChessGameOnline.props = {
  match: PropTypes.object
}

export default ChessGameOnline
