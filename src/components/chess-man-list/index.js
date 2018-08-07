import React from 'react'
import PropTypes from 'prop-types'
import ChessMan from 'components/chess-man'
import {getType} from 'components/chess-man/util'
import _ from 'lodash'
import './style.less'

const sortNames = (names) => {
  names.sort((name1, name2) => getType(name1) - getType(name2))
}

const ChessManList = ({names}) => {
  const countNames = _.countBy(names, name => name)
  const uniqNames = _.uniq(names)
  sortNames(uniqNames)
  return <div className='chess-man-list'>
    {
      uniqNames.map((name, index) => (
        <div className='chess-man-list-item'>
          <ChessMan name={name} key={index} />
          <div className='chess-man-count'>
            {countNames[name]}
          </div>
        </div>
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
