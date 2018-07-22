import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import {isValid, isSameColor} from 'components/chess-man/util'
import {findChessMan} from 'components/chess-grid/util'
import {canGo} from './util'
import chessmans from './chessmans.json'
import './style.less'

class ChessGame extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			chessmans
		}
	}

	_goTo = (info) => {
		let chessmans = _.cloneDeep(this.state.chessmans)

		const chessmanKilled = findChessMan(
			chessmans,
			info.rowIndex,
			info.cellIndex
		)
		chessmans = _.without(chessmans, chessmanKilled)

		const chessmanGo = findChessMan(
			chessmans,
			this.goFrom.rowIndex,
			this.goFrom.cellIndex
		)
		chessmanGo.rowIndex = info.rowIndex
		chessmanGo.cellIndex = info.cellIndex

		this.setState({chessmans}, () => {
			this.goFrom = null
		})
	}

	_onClick = (info) => {
		if (!this.goFrom && isValid(info.name)
			|| isSameColor(this.goFrom.name, info.name)) {
			this.goFrom = info
		} else if(canGo(this.goFrom, info)) {
			this._goTo(info)
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
