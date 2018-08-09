import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChessGame }     from './@'
import { ChessBoard }    from '../chess-board/@'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ChessGame, ChessBoard ],
  bootstrap:    [ ChessGame ]
})
export class Module { }
