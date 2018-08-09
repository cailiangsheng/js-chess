import { connect } from 'react-redux'
import { clickChessGrid } from 'components/chess-game/redux/actions'
import ChessGameFlip from '../component'

const mapStateToProps = (state, ownProps) => state.chessGame

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (target) => {
		dispatch(clickChessGrid(target))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessGameFlip)
