import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import ChessTattoo from 'components/chess-tattoo'
import ChessStepped from 'components/chess-stepped'
import ChessStepping from 'components/chess-stepping'
import ChessMan from 'components/chess-man'
import {needsTattoo, findChessMan, findPosition} from './util'
import CONSTS from './consts'
import './style.less'

const renderCells = (props, rowIndex) => {
  const {
    numRows,
    numCells,
    showTattoo,
    viewColor,
    onClick,
    activeChessman,
    steppedPositions,
    steppingPositions
  } = props

  return Array
    .from({length: numCells})
    .map((v, cellIndex) => {
      const shouldReverse = viewColor !== ChessGrid.defaultProps.viewColor
      const position = {
        rowIndex: shouldReverse ? numRows - rowIndex - 1 : rowIndex,
        cellIndex: shouldReverse ? numCells - cellIndex - 1 : cellIndex
      }
      const chessman = findChessMan(props.chessmans, position)
      const chessmanName = chessman && chessman.name
      const isHidden = chessman && chessman.isHidden
      const isActive = activeChessman && _.isEqual(position, activeChessman.position)
      const isStepped = findPosition(steppedPositions, position)
      const isStepping = findPosition(steppingPositions, position)
      const target = {name: chessmanName, position, isHidden}
      return <td key={cellIndex} className='cell' onClick={() => onClick && onClick(target)}>
        { showTattoo && !chessman && needsTattoo(position) && <ChessTattoo /> }
        { isStepped && <ChessStepped /> }
        { chessman && <ChessMan name={chessmanName} isActive={isActive} isHidden={isHidden} /> }
        { isStepping && <ChessStepping /> }
      </td>
    })
}

const renderRows = (props) => {
  return Array
    .from({length: props.numRows})
    .map((v, i) => <tr key={i} className='row'>{renderCells(props, i)}</tr>)
}

const ChessGrid = (props) => {
	return <table className='chess-grid'>
    <tbody>
      {renderRows(props)}
    </tbody>
	</table>
}

ChessGrid.propTypes = {
  numCells: PropTypes.number.isRequired,
  numRows: PropTypes.number.isRequired,
  showTattoo: PropTypes.bool.isRequired,
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
  onClick: PropTypes.func
}

ChessGrid.defaultProps = {
  numRows: CONSTS.NUM_ROWS,
  numCells: CONSTS.NUM_CELLS,
  showTattoo: true,
  chessmans: [],
  activeChessman: null,
  steppedPositions: [],
  steppingPositions: [],
  viewColor: 'black'
}

export default ChessGrid
