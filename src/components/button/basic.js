import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.less'

const BasicButton = (props) => {
	return <div className={
		classNames('button', 'basic', props.className)
	} onClick={props.onClick}>
		{props.label}
	</div>
}

BasicButton.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func
}

export default BasicButton
