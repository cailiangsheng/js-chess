import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common'
import { ChessApp } from './@'
import { ChessGame } from '../chess-game/@'
import { ChessGrid } from '../chess-grid/@'
import { ChessBoard } from '../chess-board/@'
import { ChessMan } from '../chess-man/@'
import { ChessStatus } from '../chess-status/@'
import { ChessStepped } from '../chess-stepped/@'
import { ChessStepping } from '../chess-stepping/@'
import { ChessTattoo } from '../chess-tattoo/@'

const appRoutes: Routes = [
  { path: '', component: ChessGame },
  { path: 'board', component: ChessBoard },
];

@NgModule({
  imports: [
  	BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  declarations: [
    ChessApp,
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
  	ChessApp
  ]
})
export class AppModule { }
