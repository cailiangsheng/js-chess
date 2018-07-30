import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ChessGame from 'components/chess-game/redux/container'
import store from 'components/chess-game/redux/store'

import './style.less'

ReactDOM.render(
  <Provider store={store}>
    <ChessGame />
  </Provider>,
  document.querySelector("#root")
)
