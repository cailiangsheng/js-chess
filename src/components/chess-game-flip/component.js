import React from 'react'
import ChessBoardFlip from 'components/chess-board-flip'
import ChessGridFlip from 'components/chess-grid-flip'
import ChessStatus from 'components/chess-status'
import './style.less'

const ChessGameFlip = ({
	chessmans,
	activeChessman,
	steppingPositions,
	steppedPositions,
	winnerColor,
	playerColor,
	onClick
}) => {
	return <div className='chess-game flip'>
	  <ChessStatus winnerColor={winnerColor} playerColor={playerColor} />
	  <div className='chess-body'>
		<ChessBoardFlip />
		<ChessGridFlip chessmans={chessmans} activeChessman={activeChessman}
		  steppingPositions={steppingPositions} steppedPositions={steppedPositions}
		  onClick={onClick} />
	  </div>
	</div>
}
export default ChessGameFlip
