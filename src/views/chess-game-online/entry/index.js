import React from 'react'
import BasicButton from 'components/button/basic'
import ToggleButton from 'components/button/toggle'
import './style.less'

const colorOptions = [
	{label: '红方', value: 'red'},
	{label: '黑方', value: 'black'}
]

const roomOptions = [
	{label: '随机', value: 'random'},
	{label: '指定', value: 'specify'}
]

const ChessGameEntry = (props) => {
	return <ul className='chess-game-entry'>
		<li>棋子: <ToggleButton options={colorOptions} /></li>
		<li>房间: <ToggleButton options={roomOptions} /></li>
		<li><BasicButton label='确定' /></li>
	</ul>
}

export default ChessGameEntry
