import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import store from './ngrx/store'

import { ChessGameFlipContainer } from './ngrx/container'
import { ChessGameFlipComponent } from './component.ts'
import { ChessComponentsModule } from 'components/@'
import { ChessBoardFlip } from 'components/chess-board-flip/@'

const routes: Routes = [
  {
    path: '',
    component: ChessGameFlipContainer
  },
  {
    path: 'board',
    component: ChessBoardFlip
  }
]

const COMPONENTS = [
  ChessGameFlipContainer,
  ChessGameFlipComponent
]

@NgModule({
  imports: [
    CommonModule,
    ChessComponentsModule,
    RouterModule.forChild(routes),
    store
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ChessGameFlipModule { }
