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
	import {mapState, mapActions} from 'vuex'

	export default {
		components: {
			ChessWinner,
			ChessBoard,
			ChessGrid
		},
		computed: mapState([
			'chessmans',
			'activeChessman',
			'playedChessman',
			'steppedPositions',
			'steppingPositions',
			'winnerColor'
		]),
		methods: mapActions({
			onClick: 'clickChessGrid'
		})
	}
</script>
