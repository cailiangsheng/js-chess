import React from 'react'
import ReactDOM from 'react-dom'
import ChessGame from 'components/chess-game/redux/container'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import chessGameReducer from 'components/chess-game/redux/reducer'

import './style.less'

const rootReducer = combineReducers({
  chessGame: chessGameReducer
})
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ChessGame />
  </Provider>,
  document.querySelector("#root")
)
