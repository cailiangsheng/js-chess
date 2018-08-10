import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChessGameFlip } from './@'
import { ChessBoardFlip } from '../chess-board-flip/@'

@NgModule({
	imports: [BrowserModule],
	declarations: [ChessGameFlip, ChessBoardFlip],
	bootstrap: [ChessGameFlip]
})
export class Module { }
