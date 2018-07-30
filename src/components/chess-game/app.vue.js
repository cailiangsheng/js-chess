import ChessGame from './.vue'
import store from './vuex/store'

export default {
    store,
    render: (h) => h(ChessGame)
}
