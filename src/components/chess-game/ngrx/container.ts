import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { State } from './reducer'
import { ClickGridAction } from './actions'

@Component({
  selector: 'chess-game-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chess-game-component [props]="props">
    </chess-game-component>
  `
})
export class ChessGameContainer {
  props: Object

  constructor(private store: Store<State>) {
    this.store.select('chessGame').subscribe(state => {
      this.props = state
    })
  }

  onClick($event) {
    // this.store.dispatch(new ClickGridAction($event))
  }
}
