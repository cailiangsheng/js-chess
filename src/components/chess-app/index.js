import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import ChessGame from 'components/chess-game'
import ChessBoard from 'components/chess-board'
import ChessBoardFlip from 'components/chess-board-flip'
import ChessGameFlip from 'components/chess-game-flip'

const ChessApp = () => (
    <Router>
        <div>
            <Route exact path='/' component={ChessGame} />
            <Route path='/flip' component={ChessGameFlip} />
            <Route path='/board' component={ChessBoard} />
            <Route path='/board-flip' component={ChessBoardFlip} />
        </div>
    </Router>
)

export default ChessApp
