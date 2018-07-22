import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ChessTattoo from 'components/chess-tattoo'
import ChessMan from 'components/chess-man'
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

const renderChessMan = (props, rowIndex, cellIndex, name) => {
  const {onChessManClick} = props
  const onClick = () => onChessManClick && onChessManClick({
    name,
    rowIndex,
    cellIndex
  })
  return <ChessMan name={name} onClick={onClick} />
}

const renderCells = (props, rowIndex) => {
  const {onChessGridClick} = props
  return Array
    .from({length: numColumns})
    .map((v, i) => {
      const chessman = findChessMan(props, rowIndex, i)
      const onClick = () => !chessman && onChessGridClick && onChessGridClick({
        rowIndex,
        cellIndex: i
      })
      return <td key={i} index={i} className='cell' onClick={onClick}>
        { needsTattoo(rowIndex, i) && <ChessTattoo /> }
        { chessman && renderChessMan(props, rowIndex, i, chessman.name) }
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
  onChessManClick: PropTypes.func,
  onChessGridClick: PropTypes.func
}

ChessGrid.defaultProps = {
  chessmans: []
}

export default ChessGrid
