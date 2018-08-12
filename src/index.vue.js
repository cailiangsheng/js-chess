import Vue from 'vue'
import ChessApp from 'components/chess-app/.vue'
import './style.less'

new Vue(
  ChessApp
)
.$mount(
  document.querySelector('#root')
)
