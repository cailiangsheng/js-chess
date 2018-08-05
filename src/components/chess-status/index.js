import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ChessMan from 'components/chess-man'
import {getName} from 'components/chess-man/util'
import CHESS_MAN from 'components/chess-man/consts'
import './style.less'

const ChessStatus = ({winnerColor, playerColor}) => {
  const isInitial = !winnerColor && !playerColor
  const playerName = playerColor && getName({type: CHESS_MAN.TYPE.JIANG, color: playerColor})
  return <div className={classNames('chess-status', {'initial': isInitial})}>
    {winnerColor && <div className={classNames('winner', winnerColor)} />}
    {playerName && <div className='player'><ChessMan name={playerName} /></div>}
  </div>
}

ChessStatus.propTypes = {
  winnerColor: PropTypes.string,
  playerColor: PropTypes.string
}

export default ChessStatus
