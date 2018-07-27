import React from 'react'
import classNames from 'classnames'
import './style.less'

const ChessWinner = ({winnerColor}) => {
    return <div className={classNames('chess-winner', winnerColor)} />
}

export default ChessWinner
