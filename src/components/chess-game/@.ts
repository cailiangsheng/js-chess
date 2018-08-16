import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import store from './ngrx/store'

import { ChessGameContainer } from './ngrx/container'
import { ChessGameComponent } from './component.ts'
import { ChessGrid } from '../chess-grid/@'
import { ChessBoard } from '../chess-board/@'
import { ChessComponentsModule } from '../@'

const routes: Routes = [
  {
    path: '',
    component: ChessGameContainer
  }
]

const COMPONENTS = [
  ChessGameContainer,
  ChessGameComponent,
  ChessGrid,
  ChessBoard,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChessComponentsModule,
    store
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ChessGameModule { }
