import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import redNames from './red-names'
import blackNames from './black-names'
import './style.less'

const ChessMan = ({name}) => {
	const isRed = redNames.includes(name)
	const isBlack = blackNames.includes(name)
	return <div className={classNames('chess-man', {red: isRed, black: isBlack})}>
	  <span>{name}</span>
	</div>
}

ChessMan.propTypes = {
	name: PropTypes.string
}

ChessMan.defaultProps = {
	name: '象'
}

export default ChessMan
