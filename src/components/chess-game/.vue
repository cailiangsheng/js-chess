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

	export default {
		computed: {
			chessmans() {
				return this.$store.state.chessmans
			},
			activeChessman() {
				return this.$store.state.activeChessman
			},
			playedChessman() {
				return this.$store.state.playedChessman
			},
			steppedPositions() {
				return this.$store.state.steppedPositions
			},
			steppingPositions() {
				return this.$store.state.steppingPositions
			},
			winnerColor() {
				return this.$store.state.winnerColor
			}
		},
		components: {
			ChessWinner,
			ChessBoard,
			ChessGrid
		},
		methods: {
			onClick (target) {
				this.$store.dispatch('clickChessGrid', target)
			}
		}
	}
</script>
