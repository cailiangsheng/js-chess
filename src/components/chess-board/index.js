import React from 'react'
import './style.less'

const numColumns = 8
const numRows = 9

const renderCells = () => {
  return Array
    .from({length: numColumns})
    .map((v, i) => <td key={i} index={i} className='cell' />)
}

const renderRows = () => {
  return Array
    .from({length: numRows})
    .map((v, i) => <tr key={i} index={i}  className='row'>{renderCells()}</tr>)
}

const ChessBoard = () => {
	return <table className='chess-board'>
    <tbody>
      {renderRows()}
    </tbody>
	</table>
}

export default ChessBoard
