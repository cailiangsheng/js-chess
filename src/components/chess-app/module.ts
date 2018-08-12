import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common'
import { ChessApp } from './@'
import { ChessGame } from '../chess-game/@'
import { ChessGrid } from '../chess-grid/@'
import { ChessBoard } from '../chess-board/@'
import { ChessMan } from '../chess-man/@'
import { ChessStatus } from '../chess-status/@'
import { ChessStepped } from '../chess-stepped/@'
import { ChessStepping } from '../chess-stepping/@'
import { ChessTattoo } from '../chess-tattoo/@'
import { ChessGameFlip } from '../chess-game-flip/@'
import { ChessBoardFlip } from '../chess-board-flip/@'

const appRoutes: Routes = [
  { path: '', component: ChessGame },
  { path: 'board', component: ChessBoard },
  { path: 'board-flip', component: ChessBoardFlip },
  { path: 'flip', component: ChessGameFlip }
];

@NgModule({
  imports: [
  	BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  declarations: [
    ChessApp,
    ChessGame,
    ChessGrid,
  	ChessBoard,
  	ChessMan,
    ChessStatus,
    ChessStepped,
    ChessStepping,
    ChessTattoo,
    ChessGameFlip,
    ChessBoardFlip
  ],
  bootstrap: [
  	ChessApp
  ]
})
export class AppModule { }
