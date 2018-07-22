import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ChessTattoo from 'components/chess-tattoo'
import ChessMan from 'components/chess-man'
import defaultChessmans from './chessmans.json'
import './style.less'

const numColumns = 8 + 1
const numRows = 9 + 1

const isPaoPosition = (rowIndex, cellIndex) => {
  return [2, 7].includes(rowIndex) && [1, 7].includes(cellIndex)
}
const isZuPosition = (rowIndex, cellIndex) => {
  return [3, 6].includes(rowIndex) && [0, 2, 4, 6, 8].includes(cellIndex)
}

const needsTattoo = (rowIndex, cellIndex) => {
  return isPaoPosition(rowIndex, cellIndex)
    || isZuPosition(rowIndex, cellIndex)
}

const findChessMan = (props, rowIndex, cellIndex) => {
  return props.chessmans.find(chessman => 
    chessman.rowIndex === rowIndex && chessman.cellIndex === cellIndex
  )
}

const getCells = (props, rowIndex) => {
  return Array
    .from({length: numColumns})
    .map((v, i) => {
      const chessman = findChessMan(props, rowIndex, i)
      return <td key={i} index={i} className='cell'>
        { needsTattoo(rowIndex, i) && <ChessTattoo /> }
        { chessman && <ChessMan name={chessman.name} isBlack={chessman.isBlack} /> }
      </td>
    })
}

const getRows = (props) => {
  return Array
    .from({length: numRows})
    .map((v, i) => <tr key={i} index={i}  className='row'>{getCells(props, i)}</tr>)
}

const ChessGrid = (props) => {
	return <table className='chess-grid'>
    <tbody>
      {getRows(props)}
    </tbody>
	</table>
}

ChessGrid.propTypes = {
  chessmans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isBlack: PropTypes.bool,
      rowIndex: PropTypes.number,
      cellIndex: PropTypes.number
    })
  )
}

ChessGrid.defaultProps = {
  chessmans: defaultChessmans
}

export default ChessGrid
