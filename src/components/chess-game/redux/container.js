import { connect } from 'react-redux'
import { clickChessGrid } from './actions'
import ChessGame from '../index'

const mapStateToProps = (state, ownProps) => state.chessGame

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (target) => {
		dispatch(clickChessGrid(target))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessGame)
