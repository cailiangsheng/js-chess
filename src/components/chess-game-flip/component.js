import React from 'react'
import ChessBoardFlip from 'components/chess-board-flip'
import ChessGridFlip from 'components/chess-grid-flip'
import ChessWinner from 'components/chess-winner'
import './style.less'

const ChessGameFlip = ({
	chessmans,
	activeChessman,
	steppingPositions,
	steppedPositions,
	winnerColor,
	onClick
}) => {
	return <div className='chess-game flip'>
	  <ChessWinner winnerColor={winnerColor} />
	  <div className='chess-body'>
		<ChessBoardFlip />
		<ChessGridFlip chessmans={chessmans} activeChessman={activeChessman}
		  steppingPositions={steppingPositions} steppedPositions={steppedPositions}
		  onClick={onClick} />
	  </div>
	</div>
}
export default ChessGameFlip
