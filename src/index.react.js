import React from 'react'
import ReactDOM from 'react-dom'
import ChessApp from 'components/chess-app'
import socket from 'lib/socket'
import './style.less'

ReactDOM.render(
  <ChessApp />,
  document.querySelector("#root")
)
