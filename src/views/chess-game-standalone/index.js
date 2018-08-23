import React from 'react'

const ChessGameStandalone = ({match}) => {
  const {playerColor} = match.params
  return <div>
    <span>Standalone Game</span>
    <ul>
      <li>playerColor: {playerColor}</li>
    </ul>
  </div>
}

export default ChessGameStandalone
