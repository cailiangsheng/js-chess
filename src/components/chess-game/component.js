import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import ChessWinner from 'components/chess-winner'
import './style.less'

const ChessGame = ({
	chessmans,
	activeChessman,
	steppingPositions,
	steppedPositions,
	winnerColor,
	onClick
}) => {
	return <div className='chess-game'>
	  <ChessWinner winnerColor={winnerColor} />
	  <div className='chess-body'>
		<ChessBoard />
		<ChessGrid chessmans={chessmans} activeChessman={activeChessman}
		  steppingPositions={steppingPositions} steppedPositions={steppedPositions}
		  onClick={onClick} />
	  </div>
	</div>
}

export default ChessGame
