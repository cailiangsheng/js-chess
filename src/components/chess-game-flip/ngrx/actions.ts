import { Action } from '@ngrx/store'

export const CLICK_CHESS_GRID = 'clickChessGrid'

export class ClickGridAction implements Action {
	readonly type = CLICK_CHESS_GRID

	constructor(public payload: Object) { }
}
