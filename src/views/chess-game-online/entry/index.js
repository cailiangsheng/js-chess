import React from 'react'
import BasicButton from 'components/button/basic'
import ToggleButton from 'components/button/toggle'
import _ from 'lodash'
import './style.less'

const roleOptions = [
	{label: '玩家', value: 'player'},
	{label: '旁观', value: 'viewer'}
]

const colorOptions = [
	{label: '红方', value: 'red'},
	{label: '黑方', value: 'black'}
]

const roomOptions = [
	{label: '随机', value: 'random'},
	{label: '指定', value: 'specify'}
]

class ChessGameEntry extends React.Component {
	constructor (props) {
		super(props)
		this.input = React.createRef()
		this.state = {
			roomMode: 'random'
		}
	}

	_onRoomModeChange = (value) => {
		this.setState({
			roomMode: value
		})
	}

	_onConfirm = () => {
		const roomId = _.get(this.input, 'current.value')
		console.log(roomId)
	}

	render () {
		const needsRoomId = this.state.roomMode === 'specify'
		return <ul className='chess-game-entry'>
			<li className='header'>游戏设置</li>
			<li>角色: <ToggleButton options={roleOptions} /></li>
			<li>棋子: <ToggleButton options={colorOptions} /></li>
			<li>房间: <ToggleButton options={roomOptions} onChange={this._onRoomModeChange} /></li>
			{
				needsRoomId && <li>
					房号: <input type='text' ref={this.input} />
				</li>
			}
			<li><BasicButton label='确定' onClick={this._onConfirm} /></li>
		</ul>
	}
}

export default ChessGameEntry
