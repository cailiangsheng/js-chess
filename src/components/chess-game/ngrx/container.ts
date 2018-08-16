import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { State } from './reducer'
import { ClickGridAction } from './actions'

@Component({
  selector: 'chess-game-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chess-game-component>
    </chess-game-component>
  `
})
export class ChessGameContainer {
  constructor(private store: Store<State>) {
    this.store.subscribe(data => {
      console.log(data)
      debugger
    })
    debugger
  }

  onClick($event) {
    // this.store.dispatch(new ClickGridAction($event))
  }
}
