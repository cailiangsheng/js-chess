import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChessGame } from './@'
import { ChessBoard } from '../chess-board/@'
import { ChessMan } from '../chess-man/@'
import { ChessStatus } from '../chess-status/@'

@NgModule({
  imports: [
  	BrowserModule
  ],
  declarations: [
  	ChessGame,
  	ChessBoard,
  	ChessMan,
    ChessStatus
  ],
  bootstrap: [
  	ChessGame
  ]
})
export class Module { }
