import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import ChessWinner from 'components/chess-winner'
import {isValid, isSameColor} from 'components/chess-man/util'
import {findChessMan} from 'components/chess-grid/util'
import {canGo, isGameOver, getWinnerColor} from './util'
import chessmans from './chessmans'
import './style.less'

class ChessGame extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			chessmans,
			activeChessman: null,
			playedChessman: null,
			steppedPositions: [],
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
				activeChessman: target
			})
		} else if(canGo(activeChessman, target, chessmans)) {
			this._goTo(target)
		}
	}

	render () {
		const {chessmans, activeChessman, steppedPositions, winnerColor} = this.state
		return <div className='chess-game'>
		  <ChessWinner winnerColor={winnerColor} />
		  <div className='chess-body'>
			<ChessBoard />
			<ChessGrid chessmans={chessmans} activeChessman={activeChessman} steppedPositions={steppedPositions} onClick={this._onClick} />
		  </div>
		</div>
	}
}

export default ChessGame
