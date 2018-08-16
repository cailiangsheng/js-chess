import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { State } from './reducer'
import { ClickGridAction } from './actions'

@Component({
  selector: 'chess-game-container',
  template: `
    <chess-game-component [props]="props">
    </chess-game-component>
  `
})
export class ChessGameContainer {
  props: Object

  constructor(private store: Store<State>) {
    this.store.select('chessGame').subscribe(state => {
      this.props = {
        ...state,
        onClick: ($event) => this.onClick($event)
      }
    })
  }

  onClick($event) {
    this.store.dispatch(new ClickGridAction($event))
  }
}
