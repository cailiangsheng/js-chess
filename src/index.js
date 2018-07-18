import React from 'react'
import ReactDOM from 'react-dom'
import ChessMan from 'components/chess-man'
import ChessBoard from 'components/chess-board'

ReactDOM.render(
    <div>
        <ChessMan />
        <ChessMan name='马' />
        <ChessMan name='车' isBlack />
        <ChessBoard />
    </div>,
    document.querySelector("#app")
)
