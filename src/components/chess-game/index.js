import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import {isValid, isSameColor} from 'components/chess-man/util'
import {findChessMan} from 'components/chess-grid/util'
import {canGo, isGameOver} from './util'
import chessmans from './chessmans'
import './style.less'

class ChessGame extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			chessmans,
			activeChessman: null,
			playedChessman: null
		}
	}

	_goTo = (target) => {
		let chessmans = _.cloneDeep(this.state.chessmans)

		const chessmanKilled = findChessMan(
			chessmans,
			target.position
		)
		chessmans = _.without(chessmans, chessmanKilled)

		const chessmanGoing = findChessMan(
			chessmans,
			this.state.activeChessman.position
		)
		chessmanGoing.position = target.position

		this.setState({
			chessmans,
			activeChessman: null,
			playedChessman: chessmanGoing
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
		const {chessmans, activeChessman, playedChessman} = this.state
		if (isGameOver(chessmans)) {
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
		const {chessmans, activeChessman} = this.state
		return <div className='chess-game'>
	      <ChessBoard />
	      <ChessGrid chessmans={chessmans} activeChessman={activeChessman} onClick={this._onClick} />
		</div>
	}
}

export default ChessGame
