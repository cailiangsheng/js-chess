import Vue from 'vue'
import Vuex from 'vuex'
import actions from 'components/chess-game/vuex/actions'
import { mutations, initialState } from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: initialState,
  actions,
  mutations
})

export default store
