import React from 'react'
import { Provider } from 'react-redux'
import ChessGame from './redux/container'
import store from './redux/store'

const ChessGameApp = () => (
    <Provider store={store}>
      <ChessGame />
    </Provider>
)

export default ChessGameApp
