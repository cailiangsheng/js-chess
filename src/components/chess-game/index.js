import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import './style.less'

const ChessGame = () => {
	return <div className='chess-game'>
      <ChessBoard />
      <ChessGrid />
	</div>
}

export default ChessGame
