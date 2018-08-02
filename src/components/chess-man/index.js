import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {validNames, getColor} from './util'
import './style.less'

const ChessMan = ({name, isActive, isHidden}) => {
	return <div className={classNames(
		'chess-man',
		getColor(name),
		{'active': isActive},
		{'hidden': isHidden}
	)}>
	  <span>{name}</span>
	</div>
}

ChessMan.propTypes = {
	name: PropTypes.oneOf(validNames),
	isActive: PropTypes.bool,
	isHidden: PropTypes.bool
}

ChessMan.defaultProps = {
	name: '象',
	isActive: false,
	isHidden: false
}

export default ChessMan
