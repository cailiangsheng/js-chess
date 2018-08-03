import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.less'

const ChessStatus = ({winnerColor, playerColor}) => {
  return <div className='chess-status'>
    {winnerColor && <div className={classNames('winner', winnerColor)} />}
    {playerColor && <div className={classNames('player', playerColor)} />}
  </div>
}

ChessStatus.propTypes = {
  winnerColor: PropTypes.string,
  playerColor: PropTypes.string
}

export default ChessStatus
