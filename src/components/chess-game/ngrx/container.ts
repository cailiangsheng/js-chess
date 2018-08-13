import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { State } from './reducer'
import { ClickGridAction } from './actions'

@Component({
  selector: 'chess-game-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chess-game-component [props]="state$" [props.onClick]="onClick($event)">
    </chess-game-component>
  `
})
export class ChessGameContainer {
  state$: Observable<State>

  constructor(private store: Store<State>) {
    this.state$ = store.select(state => state)
  }

  onClick($event) {
    this.store.dispatch(new ClickGridAction($event))
  }
}
