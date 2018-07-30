import React from 'react'
import ChessBoard from 'components/chess-board'
import ChessGrid from 'components/chess-grid'
import ChessWinner from 'components/chess-winner'
import { connect } from 'react-redux'
import { clickChessGrid } from './redux/actions'
import './style.less'

const ChessGame = (props) => {
	const {chessmans, activeChessman, steppingPositions, steppedPositions, winnerColor, clickChessGrid} = props
	return <div className='chess-game'>
	  <ChessWinner winnerColor={winnerColor} />
	  <div className='chess-body'>
		<ChessBoard />
		<ChessGrid chessmans={chessmans} activeChessman={activeChessman}
		  steppingPositions={steppingPositions} steppedPositions={steppedPositions}
		  onClick={clickChessGrid} />
	  </div>
	</div>
}

const mapStateToProps = (state, ownProps) => state.chessGame

const mapDispatchToProps = (dispatch, ownProps) => ({
	clickChessGrid: (target) => {
		dispatch(clickChessGrid(target))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessGame)
