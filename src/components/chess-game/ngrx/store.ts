import { StoreModule } from '@ngrx/store'
import { combineReducers } from '@ngrx/store'
import { reducer } from './reducer'

const rootReducer = combineReducers({
	chessGame: reducer
})

const store = StoreModule.forRoot(rootReducer)

export default store
