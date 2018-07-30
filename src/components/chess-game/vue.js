import ChessGame from './.vue'
import store from './vuex/store'

const ChessGameApp = {
    store,
    render: (h) => h(ChessGame)
}

export default ChessGameApp
