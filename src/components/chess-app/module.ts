import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common'

import { ChessApp } from './@'
import { ChessGameModule } from '../chess-game/@'
import { ChessBoard } from '../chess-board/@'
import { ChessBoardFlip } from '../chess-board-flip/@'
import { ChessGameFlip } from '../chess-game-flip/@'

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../chess-game/@#ChessGameModule'
  },
  { path: 'board', component: ChessBoard },
  { path: 'board-flip', component: ChessBoardFlip },
  { path: 'flip', component: ChessGameFlip }
];

@NgModule({
  imports: [
  	BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  declarations: [
    ChessApp,
    ChessGameFlip,
    ChessBoardFlip
  ],
  bootstrap: [
  	ChessApp
  ]
})
export class AppModule { }
