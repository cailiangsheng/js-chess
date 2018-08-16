import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { State } from './reducer'
import { ClickGridAction } from './actions'

@Component({
  selector: 'chess-game-flip-container',
  template: `
    <chess-game-flip-component [props]="props">
    </chess-game-flip-component>
  `
})
export class ChessGameFlipContainer {
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
