import Vue from 'vue'
import ChessGame from 'components/chess-game/.vue'
import './style.less'

new Vue(
  ChessGame
)
.$mount(
  document.querySelector('#root')
)
