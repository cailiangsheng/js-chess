import React from 'react'
import PropTypes from 'prop-types'
import BasicButton from './basic'
import _ from 'lodash'

class ToggleButton extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			optionIndex: 0
		}
	}

	_onClick = () => {
		const {optionIndex} = this.state
		const {options, onChange} = this.props
		const numOptions = options.length
		const newOptionIndex = numOptions ? (optionIndex + 1) % numOptions : 0
		this.setState({
			optionIndex: newOptionIndex
		}, () => {
			onChange && onChange(this.value())
		})
	}

	option () {
		const {optionIndex} = this.state
		const {options} = this.props
		return _.get(options, `[${optionIndex}]`)
	}

	value () {
		return _.get(this.option(), 'value')
	}

	label () {
		return _.get(this.option(), 'label', '')
	}

	render () {
		const label = this.label()
		return <BasicButton className='toggle' label={label} onClick={this._onClick} />
	}
}

ToggleButton.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.any
		}).isRequired
	),
	onChange: PropTypes.func
}

ToggleButton.defaultProps = {
	options: []
}

export default ToggleButton
