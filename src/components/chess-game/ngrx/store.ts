import { StoreModule } from '@ngrx/store'
import { combineReducers } from '@ngrx/store'
import { reducer } from './reducer'

const rootReducer = combineReducers({
	chessGame: reducer
})

const store = StoreModule.provideStore(reducer)

export default store
