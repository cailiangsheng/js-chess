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

const numColumns = CONSTS.NUM_CELLS
const numRows = CONSTS.NUM_ROWS

const renderCells = (props, rowIndex) => {
  const {onClick, activeChessman, steppedPositions, steppingPositions} = props
  return Array
    .from({length: numColumns})
    .map((v, cellIndex) => {
      const position = {rowIndex, cellIndex}
      const chessman = findChessMan(props.chessmans, position)
      const chessmanName = chessman && chessman.name
      const isActive = activeChessman && _.isEqual(position, activeChessman.position)
      const isStepped = findPosition(steppedPositions, position)
      const isStepping = findPosition(steppingPositions, position)
      const target = {name: chessmanName, position}
      return <td key={cellIndex} className='cell' onClick={() => onClick && onClick(target)}>
        { !chessman && needsTattoo(position) && <ChessTattoo /> }
        { isStepped && <ChessStepped /> }
        { chessman && <ChessMan name={chessmanName} isActive={isActive} /> }
        { isStepping && <ChessStepping /> }
      </td>
    })
}

const renderRows = (props) => {
  return Array
    .from({length: numRows})
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
  onClick: PropTypes.func
}

ChessGrid.defaultProps = {
  chessmans: [],
  activeChessman: null,
  steppedPositions: [],
  steppingPositions: []
}

export default ChessGrid
