import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import chessmans from './chessmans.json'
import './style.less'

const ChessGame = () => {
	return <div className='chess-game'>
      <ChessBoard />
      <ChessGrid chessmans={chessmans} />
	</div>
}

export default ChessGame
