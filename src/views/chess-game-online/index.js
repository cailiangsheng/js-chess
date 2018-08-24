import React from 'react'
import PropTypes from 'prop-types'
import socket from 'lib/socket'

class ChessGameOnline extends React.Component {
  constructor (props) {
    super(props)
    this._initSocket()
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
    })

    socket.on('leaveRoom', (data) => {
      console.log(`Socket[${data.socketId}] left room[${data.roomId}]`)
    })
  }

  render () {
    const {viewColor, roomId, roomToken} = this.props.match.params
    return <div>
      <span>Online Game</span>
      <ul>
        <li>viewColor: {viewColor}</li>
        <li>roomId: {roomId}</li>
        <li>roomToken: {roomToken}</li>
      </ul>
    </div>
  }
}

ChessGameOnline.props = {
  match: PropTypes.object
}

export default ChessGameOnline
