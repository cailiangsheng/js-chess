import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import store from './ngrx/store'

import { ChessGameContainer } from './ngrx/container'
import { ChessGameComponent } from './component.ts'
import { ChessComponentsModule } from '../@'
import { ChessBoard } from '../chess-board/@'

const routes: Routes = [
  {
    path: '',
    component: ChessGameContainer
  },
  {
    path: 'board',
    component: ChessBoard
  }
]

const COMPONENTS = [
  ChessGameContainer,
  ChessGameComponent
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
export class ChessGameModule { }
