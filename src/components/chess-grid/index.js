import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import ChessTattoo from 'components/chess-tattoo'
import ChessMan from 'components/chess-man'
import CONSTS from './consts'
import {needsTattoo, findChessMan} from './util'
import './style.less'

const numColumns = CONSTS.NUM_COLUMNS
const numRows = CONSTS.NUM_ROWS

const onClickHandler = (props, rowIndex, cellIndex, name) => {
  const {onClick} = props
  return () => onClick && onClick({
    name,
    rowIndex,
    cellIndex
  })
}

const renderCells = (props, rowIndex) => {
  return Array
    .from({length: numColumns})
    .map((v, i) => {
      const chessman = findChessMan(props.chessmans, rowIndex, i)
      const chessmanName = chessman && chessman.name
      return <td key={i} index={i} className='cell' onClick={onClickHandler(props, rowIndex, i, chessmanName)}>
        { !chessman && needsTattoo(rowIndex, i) && <ChessTattoo /> }
        { chessman && <ChessMan name={chessmanName} /> }
      </td>
    })
}

const renderRows = (props) => {
  return Array
    .from({length: numRows})
    .map((v, i) => <tr key={i} index={i}  className='row'>{renderCells(props, i)}</tr>)
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
      rowIndex: PropTypes.number.isRequired,
      cellIndex: PropTypes.number.isRequired
    })
  ),
  onClick: PropTypes.func
}

ChessGrid.defaultProps = {
  chessmans: []
}

export default ChessGrid
