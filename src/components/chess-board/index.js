import React from 'react'
import './style.less'

const numColumns = 8
const numRows = 9

const renderItems = (n, render) => Array.from({length: n}, (_, i) => render(i))

const renderCells = ({rows, columns, row, render}) => renderItems(columns, i => (
    <td className='cell' key={i}>
      {render && render({row, column: i}, {rows, columns})}
    </td>
))

const renderRows = ({rows, ...props}) => renderItems(rows, i => (
  <tr className='row' key={i}>{renderCells({row: i, rows, ...props})}</tr>
))

const renderTable = ({className, ...props}) => (
  <div className={className}><table><tbody>{renderRows(props)}</tbody></table></div>
)

const Grid = (props) => (
  renderTable({...props, className: ['grid', props.className].filter(Boolean).join(' ')})
)

const BackGrid = (props) => <Grid {...props} className='back' rows={numRows} columns={numColumns} />

const ForeGrid = (props) => <Grid {...props} className='fore' rows={numRows + 1} columns={numColumns + 1} />

const ChessBoard = (props) => (
  <div className='chess-board normal'>
    <BackGrid {...props} render={null} />
    <ForeGrid render={props.render} />
  </div>
)

export default ChessBoard
