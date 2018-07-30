import Vue from 'vue'
import ChessGameApp from 'components/chess-game/app.vue'
import './style.less'

new Vue(
  ChessGameApp
)
.$mount(
  document.querySelector('#root')
)
