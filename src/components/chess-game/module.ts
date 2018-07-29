import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChessGame }     from './@'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ChessGame ],
  bootstrap:    [ ChessGame ]
})
export class Module { }
