import React from 'react'
import BasicButton from 'components/button/basic'
import './style.less'

const ChessGameEntry = (props) => {
	return <ul className='chess-game-entry'>
		<li>棋子: 【红方/黑方】</li>
		<li>房间: 【随机/指定】</li>
		<li>【确定】 【取消】</li>
		<li className='buttons'>
			<BasicButton label='确定' className='left' />
			<BasicButton label='取消' className='right' />
		</li>
	</ul>
}

export default ChessGameEntry
