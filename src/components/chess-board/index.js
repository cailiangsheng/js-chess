import React from 'react'
import './style.less'

const numColumns = 8
const numRows = 9

const renderCells = () => {
  return Array
    .from({length: numColumns})
    .map((v, i) => <td key={i} className='cell' />)
}

const renderRows = () => {
  return Array
    .from({length: numRows})
    .map((v, i) => <tr key={i} className='row'>{renderCells()}</tr>)
}

const ChessBoard = () => {
	return <div className='chess-board normal'>
    <table>
      <tbody>
        {renderRows()}
      </tbody>
  	</table>
  </div>
}

export default ChessBoard
