import React from 'react'
import './style.less'

const numColumns = 8
const numRows = 9

const getCells = () => {
  return Array
    .from({length: numColumns})
    .map((v, i) => <td key={i} index={i} className='cell' />)
}

const getRows = () => {
  return Array
    .from({length: numRows})
    .map((v, i) => <tr key={i} index={i}  className='row'>{getCells()}</tr>)
}

const ChessBoard = () => {
	return <table className='chess-board'>
    <tbody>
      {getRows()}
    </tbody>
	</table>
}

export default ChessBoard
