import React from 'react'

const ChessGameStandalone = ({match}) => {
  const {viewColor} = match.params
  return <div>
    <span>Standalone Game</span>
    <ul>
      <li>viewColor: {viewColor}</li>
    </ul>
  </div>
}

export default ChessGameStandalone
