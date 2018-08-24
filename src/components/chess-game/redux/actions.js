export const CLICK_CHESS_GRID = 'clickChessGrid'
export const UPDATE_CHESS_STATE = 'updateChessState'

export const clickChessGrid = (target) => ({
  type: CLICK_CHESS_GRID,
  target
})

export const updateChessState = (state) => ({
  type: UPDATE_CHESS_STATE,
  state
})
