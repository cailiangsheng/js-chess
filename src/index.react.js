import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ChessGame from 'components/chess-game'
import ChessBoard from 'components/chess-board'
import './style.less'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ChessGame} />
      <Route path='/game' component={ChessGame} />
      <Route path='/board' component={ChessBoard} />
    </div>
  </Router>,
  document.querySelector("#root")
)
