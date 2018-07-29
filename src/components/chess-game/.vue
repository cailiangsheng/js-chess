<template>
	<div class="chess-game">
		  <ChessWinner :winnerColor="winnerColor" />
		  <div class="chess-body">
				<ChessBoard />
				<ChessGrid :chessmans="chessmans"
					:activeChessman="activeChessman"
				  :steppingPositions="steppingPositions"
				  :steppedPositions="steppedPositions"
				  @onClick="onClick" />
		  </div>
	</div>
</template>

<style lang="less" src="./style.less"></style>

<script>
	import ChessWinner from 'components/chess-winner/.vue'
	import ChessBoard from 'components/chess-board/.vue'
	import ChessGrid from 'components/chess-grid/.vue'
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
			onClick () {
				// TODO
			}
		}
	}
</script>