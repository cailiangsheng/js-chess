import React from 'react'
import classNames from 'classnames'
import ChessTattoo from 'components/chess-tattoo'
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

const getCells = (rowIndex) => {
  return Array
    .from({length: numColumns})
    .map((v, i) => <td key={i} index={i} className='cell'>
      { needsTattoo(rowIndex, i) && <ChessTattoo /> }
    </td>)
}

const getRows = () => {
  return Array
    .from({length: numRows})
    .map((v, i) => <tr key={i} index={i}  className='row'>{getCells(i)}</tr>)
}

const ChessGrid = () => {
	return <table className='chess-grid'>
    <tbody>
      {getRows()}
    </tbody>
	</table>
}

export default ChessGrid
