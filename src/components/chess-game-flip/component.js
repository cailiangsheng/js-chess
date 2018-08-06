import React from 'react'
import ChessBoardFlip from 'components/chess-board-flip'
import ChessGridFlip from 'components/chess-grid-flip'
import ChessManList from 'components/chess-man-list'
import ChessStatus from 'components/chess-status'
import {isRed, isBlack} from 'components/chess-man/util'
import _ from 'lodash'
import './style.less'

const ChessGameFlip = ({
	killedNames,
	chessmans,
	activeChessman,
	steppingPositions,
	steppedPositions,
	winnerColor,
	playerColor,
	onClick
}) => {
	const redNames = _.filter(killedNames, isRed)
	const blackNames = _.filter(killedNames, isBlack)
	return <div className='chess-game flip'>
	  <ChessStatus winnerColor={winnerColor} playerColor={playerColor} />
		<div className='chess-frames'>
			<div className='left'>
				<ChessManList names={redNames} />
			</div>
			<div className='chess-body'>
				<ChessBoardFlip />
				<ChessGridFlip chessmans={chessmans} activeChessman={activeChessman}
					steppingPositions={steppingPositions} steppedPositions={steppedPositions}
					onClick={onClick} />
			</div>
			<div className='right'>
				<ChessManList names={blackNames} />
			</div>
		</div>
	</div>
}

export default ChessGameFlip
