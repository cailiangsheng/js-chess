<template>
    <router-view />
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import ChessGame from 'components/chess-game/.vue'
import ChessBoard from 'components/chess-board/.vue'
import ChessBoardFlip from 'components/chess-board-flip/.vue'
import ChessGameFlip from 'components/chess-game-flip/.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: ChessGame },
        { path: '/board', component: ChessBoard },
        { path: '/board-flip', component: ChessBoardFlip },
        { path: '/flip', component: ChessGameFlip }
    ]
})

export default {
    router
}
</script>
