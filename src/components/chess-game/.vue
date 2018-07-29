<template>
	<div class="chess-game">
		  <ChessWinner :winnerColor="winnerColor" />
		  <div class="chess-body">
				<ChessBoard />
				<ChessGrid :chessmans="chessmans"
					:activeChessman="activeChessman"
				  :steppingPositions="steppingPositions"
				  :steppedPositions="steppedPositions"
				  @click="onClick" />
		  </div>
	</div>
</template>

<style lang="less" src="./style.less"></style>

<script>
	import _ from 'lodash'
	import ChessWinner from 'components/chess-winner/.vue'
	import ChessBoard from 'components/chess-board/.vue'
	import ChessGrid from 'components/chess-grid/.vue'
	import {findChessMan} from 'components/chess-grid/util'
	import {isValid, isSameColor} from 'components/chess-man/util'
	import {
		canGo,
		isGameOver,
		getWinnerColor,
		getSteppingPositions
	} from './util'
	import chessmans from './chessmans'

	export default {
		data() {
			return {
				chessmans,
				activeChessman: null,
				playedChessman: null,
				steppedPositions: [],
				steppingPositions: [],
				winnerColor: ''
			}
		},
	  components: {
	    ChessWinner,
	    ChessBoard,
	    ChessGrid
	  },
		methods: {
			onClick (target) {
				const {chessmans, activeChessman, winnerColor} = this
				if (winnerColor) {
					return
				} else if (this._canActivate(target)) {
					Object.assign(this, {
						activeChessman: target,
						steppingPositions: getSteppingPositions(target, chessmans)
					})
				} else if(canGo(activeChessman, target, chessmans)) {
					this._goTo(target)
				}
			},
			_goTo(target) {
				let chessmans = _.cloneDeep(this.chessmans)

				const chessmanKilled = findChessMan(
					chessmans,
					target.position
				)
				chessmans = _.without(chessmans, chessmanKilled)

				const fromPosition = this.activeChessman.position
				const toPosition = target.position
				const steppedPositions = [fromPosition, toPosition]
				const chessmanGoing = findChessMan(chessmans, fromPosition)
				chessmanGoing.position = toPosition

				Object.assign(this, {
					chessmans,
					activeChessman: null,
					playedChessman: chessmanGoing,
					steppingPositions: [],
					steppedPositions,
					winnerColor: getWinnerColor(chessmans)
				})
			},
			_canActivate(target) {
				if (!isValid(target.name)) return false

				const {activeChessman, playedChessman} = this
				return !activeChessman && !playedChessman
					|| !activeChessman && !isSameColor(playedChessman.name, target.name)
					|| activeChessman && isSameColor(activeChessman.name, target.name)
			}
		}
	}
</script>