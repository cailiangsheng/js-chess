import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ChessGameFlipComponent } from './component.ts'
import { ChessComponentsModule } from '../@'
import { ChessBoardFlip } from '../chess-board-flip/@'

const routes: Routes = [
	{
		path: '',
		component: ChessGameFlipComponent
	},
	{
		path: 'board',
		component: ChessBoardFlip
	}
]

const COMPONENTS = [
	ChessGameFlipComponent
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ChessComponentsModule
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class ChessGameFlipModule { }
