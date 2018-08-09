import React from 'react'
import ChessGrid from 'components/chess-grid'
import CONSTS from './consts'

const customProps = {
  numRows: CONSTS.NUM_ROWS,
  numCells: CONSTS.NUM_CELLS,
  showTattoo: false,
}

const ChessGridFlip = (props) => {
  return <ChessGrid {...props} {...customProps} />
}

export default ChessGridFlip
