import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import redNames from './names-red'
import blackNames from './names-black'
import './style.less'

const validNames = redNames.concat(blackNames)
const isValid = (name) => validNames.includes(name)
const isRed = (name) => redNames.includes(name)
const isBlack = (name) => blackNames.includes(name)

const isSameColor = (name1, name2) => {
	return isValid(name1) && isValid(name2) && (
		isRed(name1) && isRed(name2) ||
		isBlack(name1) && isBlack(name2)
	)
}

const ChessMan = ({name}) => {
	return <div className={classNames('chess-man', {red: isRed(name), black: isBlack(name)})}>
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

export {
	isValid,
	isRed,
	isBlack,
	isSameColor
}
