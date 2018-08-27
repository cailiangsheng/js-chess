import React from 'react'
import { Provider } from 'react-redux'
import ChessGame from './redux/container'
import store from './redux/store'
import { updateChessState } from './redux/actions'

const ChessGameApp = (props) => (
    <Provider store={store}>
      <ChessGame {...props} />
    </Provider>
)

export default ChessGameApp

export {
  store,
  updateChessState
}
