import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.less'

const ChessMan = ({name, isBlack}) => {
	return <div className={classNames('chess-man', {red: !isBlack, black: isBlack})}>
	  <span>{name}</span>
	</div>
}

ChessMan.propTypes = {
	name: PropTypes.string,
	isBlack: PropTypes.bool
}

ChessMan.defaultProps = {
	name: '帅',
	isBlack: false
}

export default ChessMan
