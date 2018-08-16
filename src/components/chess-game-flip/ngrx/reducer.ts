import { CLICK_CHESS_GRID, ClickGridAction } from './actions'
import { initialState, clickTarget } from '../redux/reducer'

export interface State {
	killedNames: string[],
	chessmans: Object[],
	activeChessman: Object | null,
	steppedPositions: Object[],
	steppingPositions: Object[],
	winnerColor: string | null,
	playerColor: string | null
}

export function reducer(
	state: State = initialState,
	action: ClickGridAction): State {
	switch (action.type) {
		case CLICK_CHESS_GRID:
			return clickTarget(state, action.payload)
		default:
			return state
	}
}
