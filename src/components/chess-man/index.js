import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {validNames, isRed, isBlack} from './util'
import './style.less'

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
