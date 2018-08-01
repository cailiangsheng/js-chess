import React from 'react'
import ChessGrid from 'components/chess-grid'
import CONSTS from './consts'

const sizeProps = {
  numRows: CONSTS.NUM_ROWS,
  numCells: CONSTS.NUM_CELLS,
}

const ChessGridFlip = (props) => {
  return <ChessGrid {...props} {...sizeProps} />
}

export default ChessGridFlip
