import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChessGame } from './@'
import { ChessGrid } from '../chess-grid/@'
import { ChessBoard } from '../chess-board/@'
import { ChessMan } from '../chess-man/@'
import { ChessStatus } from '../chess-status/@'
import { ChessStepped } from '../chess-stepped/@'
import { ChessStepping } from '../chess-stepping/@'
import { ChessTattoo } from '../chess-tattoo/@'

@NgModule({
  imports: [
  	BrowserModule
  ],
  declarations: [
    ChessGame,
    ChessGrid,
  	ChessBoard,
  	ChessMan,
    ChessStatus,
    ChessStepped,
    ChessStepping,
    ChessTattoo
  ],
  bootstrap: [
  	ChessGame
  ]
})
export class Module { }
