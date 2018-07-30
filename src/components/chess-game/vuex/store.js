import Vue from 'vue/dist/vue.common'
import Vuex from 'vuex'
import actions from './actions'
import { mutations, initialState } from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: initialState,
  actions,
  mutations
})

export default store
