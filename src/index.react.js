import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import ChessGame from 'components/chess-game'
import ChessBoard from 'components/chess-board'
import ChessBoardFlip from 'components/chess-board-flip'
import ChessGameFlip from 'components/chess-game-flip'
import './style.less'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ChessGame} />
      <Route path='/flip' component={ChessGameFlip} />
      <Route path='/board' component={ChessBoard} />
      <Route path='/board-flip' component={ChessBoardFlip} />
    </div>
  </Router>,
  document.querySelector("#root")
)
