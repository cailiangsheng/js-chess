import React from 'react'

const ChessGameOnline = ({match}) => {
  const {playerColor, roomId, roomToken} = match.params
  return <div>
    <span>Online Game</span>
    <ul>
      <li>playerColor: {playerColor}</li>
      <li>roomId: {roomId}</li>
      <li>roomToken: {roomToken}</li>
    </ul>
  </div>
}

export default ChessGameOnline
