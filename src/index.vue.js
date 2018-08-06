import Vue from 'vue'
import VueRouter from 'vue-router'
import ChessGame from 'components/chess-game/.vue'
import ChessBoard from 'components/chess-board/.vue'
import './style.less'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: ChessGame },
    { path: '/board', component: ChessBoard }
  ]
})

new Vue({
  router,
  template: '<router-view />'
})
.$mount(
  document.querySelector('#root')
)
