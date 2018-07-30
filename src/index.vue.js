import Vue from 'vue/dist/vue.common'
import ChessGame from 'components/chess-game/.vue'
import store from 'components/chess-game/vuex/store'
import './style.less'

const root = document.querySelector('#root')

new Vue({
  store,
  render: (h) => h(ChessGame)
})
.$mount(root)
