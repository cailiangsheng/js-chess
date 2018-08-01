import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import ChessGame from 'components/chess-game'
import ChessBoard from 'components/chess-board'
import ChessBoardHalf from 'components/chess-board-half'
import './style.less'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ChessGame} />
      <Route path='/game' component={ChessGame} />
      <Route path='/board' component={ChessBoard} />
      <Route path='/board-half' component={ChessBoardHalf} />
    </div>
  </Router>,
  document.querySelector("#root")
)
