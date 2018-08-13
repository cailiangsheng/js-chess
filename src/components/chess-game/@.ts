import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import store from './ngrx/store'

import { ChessGameContainer } from './ngrx/container'
import { ChessGameComponent } from './component'
import { ChessGrid } from '../chess-grid/@'
import { ChessBoard } from '../chess-board/@'
import { ChessMan } from '../chess-man/@'
import { ChessStatus } from '../chess-status/@'
import { ChessStepped } from '../chess-stepped/@'
import { ChessStepping } from '../chess-stepping/@'
import { ChessTattoo } from '../chess-tattoo/@'

@NgModule({
  imports: [
    store
  ],
  declarations: [
    ChessGameContainer,
    ChessGameComponent,
    ChessGrid,
    ChessBoard,
    ChessMan,
    ChessStatus,
    ChessStepped,
    ChessStepping,
    ChessTattoo
  ],
  providers: [
  ],
})
export class ChessGameModule {}
