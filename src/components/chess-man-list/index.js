import React from 'react'
import PropTypes from 'prop-types'
import ChessMan from 'components/chess-man'
import './style.less'

const ChessManList = (props) => {
  return <div className='chess-man-list'>
    {
      props.names.map((name, index) => (
        <ChessMan name={name} key={index} />
      ))
    }
  </div>
}

ChessManList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
}

export default ChessManList
