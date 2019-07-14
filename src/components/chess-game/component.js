import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import ChessBoard from 'components/chess-board'
import ChessStatus from 'components/chess-status'
import ChessTattoo from 'components/chess-tattoo'
import ChessStepped from 'components/chess-stepped'
import ChessStepping from 'components/chess-stepping'
import ChessMan from 'components/chess-man'
import { needsTattoo, findChessMan, findPosition } from './pos'
import { getColor } from 'components/chess-man/util'
import './style.less'

const allowAction = ({
	actionColor,
	activeColor,
	chessmanColor
  }) => {
	if (!actionColor) return true
	if (activeColor) {
	  return activeColor === actionColor
	} else {
	  return chessmanColor === actionColor
	}
  }

const ChessGame = ({
	chessmans,
	activeChessman,
	steppingPositions,
	steppedPositions,
	winnerColor,
	playerColor,
	viewColor,
	actionColor,
	onClick
}) => {
	const renderCell = (pos, size) => {
		const {row: rowIndex, column: cellIndex} = pos
		const {rows: numRows, columns: numCells} = size
		const shouldReverse = viewColor !== ChessGame.defaultProps.viewColor
		const position = {
		  rowIndex: shouldReverse ? numRows - rowIndex - 1 : rowIndex,
		  cellIndex: shouldReverse ? numCells - cellIndex - 1 : cellIndex
		}
		const chessman = findChessMan(chessmans, position)
		const chessmanName = chessman && chessman.name
		const isHidden = chessman && chessman.isHidden
		const isActive = activeChessman && _.isEqual(position, activeChessman.position)
		const isStepped = findPosition(steppedPositions, position)
		const isStepping = findPosition(steppingPositions, position)
		const target = { name: chessmanName, position, isHidden }
		const chessmanColor = chessman && getColor(chessman.name)
		const activeColor = activeChessman && getColor(activeChessman.name)
		const isClickable = allowAction({ actionColor, activeColor, chessmanColor }) && onClick
		const clickHandler = isClickable ? () => onClick(target) : undefined
		return <div className='content' onClick={clickHandler}>
		  {!chessman && needsTattoo(position) && <ChessTattoo />}
		  {isStepped && <ChessStepped />}
		  {chessman && <ChessMan name={chessmanName} isActive={isActive} isHidden={isHidden} />}
		  {isStepping && <ChessStepping />}
		</div>
	}
	return <div className='chess-game normal'>
		<ChessStatus winnerColor={winnerColor} playerColor={playerColor} />
		<ChessBoard render={renderCell} />
	</div>
}

ChessGame.propTypes = {
  chessmans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.shape({
        rowIndex: PropTypes.number.isRequired,
        cellIndex: PropTypes.number.isRequired
      }).isRequired
    })
  ),
  activeChessman: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
      rowIndex: PropTypes.number.isRequired,
      cellIndex: PropTypes.number.isRequired
    }).isRequired
  }),
  steppedPositions: PropTypes.arrayOf(
    PropTypes.shape({
      rowIndex: PropTypes.number.isRequired,
      cellIndex: PropTypes.number.isRequired
    })
  ),
  steppingPositions: PropTypes.arrayOf(
    PropTypes.shape({
      rowIndex: PropTypes.number.isRequired,
      cellIndex: PropTypes.number.isRequired
    })
  ),
  viewColor: PropTypes.string,
  actionColor: PropTypes.string,
  onClick: PropTypes.func
}

ChessGame.defaultProps = {
  chessmans: [],
  activeChessman: null,
  steppedPositions: [],
  steppingPositions: [],
  viewColor: 'red',
  actionColor: null
}

export default ChessGame
