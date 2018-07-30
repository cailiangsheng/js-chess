import Vue from 'vue'
import ChessGame from 'components/chess-game/.vue'
import store from 'components/chess-game/vuex/store'
import './style.less'

new Vue({
  store,
  render: (h) => h(ChessGame)
})
.$mount(
  document.querySelector('#root')
)
