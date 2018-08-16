import { NgModule, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common'

import { ChessGameModule } from '../chess-game/@'
import { ChessGameFlipModule } from '../chess-game-flip/@'

@Component({
  selector: '#root',
  template: `<router-outlet></router-outlet>`
})
export class ChessApp { }

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => ChessGameModule
  },
  {
    path: 'flip',
    loadChildren: () => ChessGameFlipModule
  },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  declarations: [
    ChessApp
  ],
  bootstrap: [
    ChessApp
  ]
})
export class AppModule { }
