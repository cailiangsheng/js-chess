import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import ChessGame from 'components/chess-game'
import ChessBoard from 'components/chess-board'
import ChessBoardFlip from 'components/chess-board-flip'
import ChessGameFlip from 'components/chess-game-flip'
import ChessGameOnline from 'views/chess-game-online'
import ChessGameStandalone from 'views/chess-game-standalone'

const ChessApp = () => (
    <Router>
        <div>
            <Route path='/online/:playerColor(red|black)?/:roomId?/:roomToken?' component={ChessGameOnline} />
            <Route path='/standalone/:playerColor(red|black)?' component={ChessGameStandalone} />
            <Route exact path='/' component={ChessGame} />
            <Route path='/flip' component={ChessGameFlip} />
            <Route path='/board' component={ChessBoard} />
            <Route path='/board-flip' component={ChessBoardFlip} />
        </div>
    </Router>
)

export default ChessApp
