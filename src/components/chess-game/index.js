import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import {isValid, isSameColor} from 'components/chess-man/util'
import {findChessMan} from 'components/chess-grid/util'
import {canGo} from './util'
import chessmans from './chessmans'
import './style.less'

class ChessGame extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			chessmans
		}
	}

	_goTo = (target) => {
		let chessmans = _.cloneDeep(this.state.chessmans)

		const chessmanKilled = findChessMan(
			chessmans,
			target.rowIndex,
			target.cellIndex
		)
		chessmans = _.without(chessmans, chessmanKilled)

		const chessmanGoing = findChessMan(
			chessmans,
			this.targetFrom.rowIndex,
			this.targetFrom.cellIndex
		)
		chessmanGoing.rowIndex = target.rowIndex
		chessmanGoing.cellIndex = target.cellIndex

		this.setState({chessmans}, () => {
			this.targetFrom = null
		})
	}

	_onClick = (target) => {
		if (!this.targetFrom && isValid(target.name)
			|| isSameColor(this.targetFrom.name, target.name)) {
			this.targetFrom = target
		} else if(canGo(this.targetFrom, target)) {
			this._goTo(target)
		}
	}

	render () {
		return <div className='chess-game'>
	      <ChessBoard />
	      <ChessGrid chessmans={this.state.chessmans} onClick={this._onClick} />
		</div>
	}
}

export default ChessGame
