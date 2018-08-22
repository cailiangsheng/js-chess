import Vue from 'vue'
import ChessApp from 'views/chess-app/.vue'
import './style.less'

new Vue(
  ChessApp
)
.$mount(
  document.querySelector('#root')
)
