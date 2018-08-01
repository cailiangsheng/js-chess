import { createStore, combineReducers } from 'redux'
import reducer from 'components/chess-game/redux/reducer'

const rootReducer = combineReducers({
    chessGame: reducer
})

const store = createStore(rootReducer)

export default store
