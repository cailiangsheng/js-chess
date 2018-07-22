import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {validNames, getColor} from './util'
import './style.less'

const ChessMan = ({name}) => {
	return <div className={classNames('chess-man', getColor(name))}>
	  <span>{name}</span>
	</div>
}

ChessMan.propTypes = {
	name: PropTypes.oneOf(validNames)
}

ChessMan.defaultProps = {
	name: '象'
}

export default ChessMan
