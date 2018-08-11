import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import ChessStatus from 'components/chess-status'
import './style.less'

const ChessGame = ({
	chessmans,
	activeChessman,
	steppingPositions,
	steppedPositions,
	winnerColor,
	playerColor,
	onClick
}) => {
	return <div className='chess-game normal'>
	  <ChessStatus winnerColor={winnerColor} playerColor={playerColor} />
	  <div className='chess-body'>
		<ChessBoard />
		<ChessGrid chessmans={chessmans} activeChessman={activeChessman}
		  steppingPositions={steppingPositions} steppedPositions={steppedPositions}
		  onClick={onClick} />
	  </div>
	</div>
}

export default ChessGame