import { StoreModule, ActionReducerMap } from '@ngrx/store'
import { reducer, State } from './reducer'

export interface ChessGameState {
	chessGame: State
}

export const reducers: ActionReducerMap<ChessGameState> = {
	chessGame: reducer
}

const store = StoreModule.forRoot(reducers)

export default store
