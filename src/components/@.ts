import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ChessGrid } from './chess-grid/@'
import { ChessBoard } from './chess-board/@'
import { ChessGridFlip } from './chess-grid-flip/@'
import { ChessBoardFlip } from './chess-board-flip/@'
import { ChessManList } from './chess-man-list/@'
import { ChessMan } from './chess-man/@'
import { ChessStatus } from './chess-status/@'
import { ChessStepped } from './chess-stepped/@'
import { ChessStepping } from './chess-stepping/@'
import { ChessTattoo } from './chess-tattoo/@'

const COMPONENTS = [
	ChessGrid,
	ChessBoard,
	ChessGridFlip,
	ChessBoardFlip,
	ChessManList,
	ChessMan,
	ChessStatus,
	ChessStepped,
	ChessStepping,
	ChessTattoo
]

@NgModule({
	imports: [
		CommonModule
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class ChessComponentsModule { }
