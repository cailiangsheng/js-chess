import Vue from 'vue/dist/vue.common'
import ChessBoard from 'components/chess-board/.vue'

const root = document.querySelector('#root')

new Vue({
  render: (h) => h(ChessBoard)
}).$mount(root)