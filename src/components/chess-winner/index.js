import React from 'react'
import classNames from 'classnames'
import './style.less'

const ChessWinner = ({winnerColor, playerColor}) => {
	if (winnerColor)
    return <div className={classNames('chess-winner', winnerColor)} />
  else
    return <div className={classNames('chess-player', playerColor)} />
}

export default ChessWinner
