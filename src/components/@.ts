import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ChessMan } from './chess-man/@'
import { ChessStatus } from './chess-status/@'
import { ChessStepped } from './chess-stepped/@'
import { ChessStepping } from './chess-stepping/@'
import { ChessTattoo } from './chess-tattoo/@'

const COMPONENTS = [
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
