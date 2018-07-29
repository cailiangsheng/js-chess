import Vue from 'vue/dist/vue.common'
import ChessGame from 'components/chess-game/.vue'
import './style.less'

const root = document.querySelector('#root')

new Vue({
  render: (h) => h(ChessGame)
})
.$mount(root)