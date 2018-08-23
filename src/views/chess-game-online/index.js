import React from 'react'
import PropTypes from 'prop-types'
import socket from 'lib/socket'

class ChessGameOnline extends React.Component {
  constructor (props) {
    super(props)
    this._initSocket()
  }

  _initSocket = () => {
    const {playerColor, roomId, roomToken} = this.props.match.params
    socket.on('connect', () => {
      console.log('conneted')
      socket.emit('hello', {
        name: 'world'
      })
    })
  }

  render () {
    const {playerColor, roomId, roomToken} = this.props.match.params
    return <div>
      <span>Online Game</span>
      <ul>
        <li>playerColor: {playerColor}</li>
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
