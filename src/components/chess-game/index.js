import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import ChessWinner from 'components/chess-winner'

import {isValid, isSameColor} from 'lib/utils/chess-man'
import {findChessMan} from 'lib/utils/chess-position'
import {
	canGo,
	isGameOver,
	getWinnerColor,
	getSteppingPositions
} from 'lib/utils/chess-game'

import CHESS_MANS from 'lib/consts/chess-mans.json'

import './style.less'

class ChessGame extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			chessmans: CHESS_MANS,
			activeChessman: null,
			playedChessman: null,
			steppedPositions: [],
			steppingPositions: [],
			winnerColor: ''
		}
	}

	_goTo = (target) => {
		let chessmans = _.cloneDeep(this.state.chessmans)

		const chessmanKilled = findChessMan(
			chessmans,
			target.position
		)
		chessmans = _.without(chessmans, chessmanKilled)

		const fromPosition = this.state.activeChessman.position
		const toPosition = target.position
		const steppedPositions = [fromPosition, toPosition]
		const chessmanGoing = findChessMan(chessmans, fromPosition)
		chessmanGoing.position = toPosition

		this.setState({
			chessmans,
			activeChessman: null,
			playedChessman: chessmanGoing,
			steppingPositions: [],
			steppedPositions,
			winnerColor: getWinnerColor(chessmans)
		})
	}

	_canActivate = (target) => {
		if (!isValid(target.name)) return false

		const {activeChessman, playedChessman} = this.state
		return !activeChessman && !playedChessman
			|| !activeChessman && !isSameColor(playedChessman.name, target.name)
			|| activeChessman && isSameColor(activeChessman.name, target.name)
	}

	_onClick = (target) => {
		const {chessmans, activeChessman, winnerColor} = this.state
		if (winnerColor) {
			return
		} else if (this._canActivate(target)) {
			this.setState({
				activeChessman: target,
				steppingPositions: getSteppingPositions(target, chessmans)
			})
		} else if(canGo(activeChessman, target, chessmans)) {
			this._goTo(target)
		}
	}

	render () {
		const {chessmans, activeChessman, steppingPositions, steppedPositions, winnerColor} = this.state
		return <div className='chess-game'>
		  <ChessWinner winnerColor={winnerColor} />
		  <div className='chess-body'>
			<ChessBoard />
			<ChessGrid chessmans={chessmans} activeChessman={activeChessman}
			  steppingPositions={steppingPositions} steppedPositions={steppedPositions}
			  onClick={this._onClick} />
		  </div>
		</div>
	}
}

export default ChessGame
