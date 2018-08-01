import React from 'react'
import './style.less'

const numRows = 8
const numCells = 4

const renderCells = () => {
  return Array
    .from({length: numCells})
    .map((v, i) => <td key={i} className='cell' />)
}

const renderRows = () => {
  return Array
    .from({length: numRows})
    .map((v, i) => <tr key={i} className='row'>{renderCells()}</tr>)
}

const ChessBoardFlip = () => {
	return <div className='chess-board flip'>
    <table>
      <tbody>
        {renderRows()}
      </tbody>
  	</table>
  </div>
}

export default ChessBoardFlip
