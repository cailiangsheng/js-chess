import {clickTarget, initialState} from '../redux/reducer'

const mutations = {
  clickChessGrid:  (state, target) => {
    const newState = clickTarget(state, target)
    if (newState !== state) {
      Object.assign(state, newState)
    }
  }
}

export {
  mutations,
  initialState
}
