import React from 'react'
import PropTypes from 'prop-types'
import ChessMan from 'components/chess-man'
import {getType} from 'components/chess-man/util'
import './style.less'

const ChessManList = ({names}) => {
  names.sort((name1, name2) => getType(name1) - getType(name2))
  return <div className='chess-man-list'>
    {
      names.map((name, index) => (
        <ChessMan name={name} key={index} />
      ))
    }
  </div>
}

ChessManList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
}

ChessManList.defaultProps = {
  names: []
}

export default ChessManList
