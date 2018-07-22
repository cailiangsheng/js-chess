import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import redNames from './red-names'
import blackNames from './black-names'
import './style.less'

const validNames = redNames.concat(blackNames)

const ChessMan = ({name, onClick}) => {
	const isRed = redNames.includes(name)
	const isBlack = blackNames.includes(name)
	return <div className={classNames('chess-man', {red: isRed, black: isBlack})}
		onClick={onClick}>
	  <span>{name}</span>
	</div>
}

ChessMan.propTypes = {
	name: PropTypes.oneOf(validNames),
	onClick: PropTypes.func
}

ChessMan.defaultProps = {
	name: '象'
}

export default ChessMan
