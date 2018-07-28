import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {validNames, getColor} from 'lib/utils/chess-man'
import './style.less'

const ChessMan = ({name, isActive}) => {
	return <div className={
		classNames('chess-man', getColor(name), {'active': isActive})
	}>
	  <span>{name}</span>
	</div>
}

ChessMan.propTypes = {
	name: PropTypes.oneOf(validNames),
	isActive: PropTypes.bool
}

ChessMan.defaultProps = {
	name: '象',
	isActive: false
}

export default ChessMan
