<template>
	<table class="chess-grid">
    <tbody>
      <tr class="row" v-for="(v, i) in 10" :key="i">
      	<td class="cell" v-for="(v, j) in 9" :key="j">
      		<ChessTattoo v-if="needsTattoo(i, j)" />
      		<ChessMan v-if="hasChessMan(i, j)" :name="getChessManName(i, j)" />
	      </td>
      </tr>
    </tbody>
	</table>
</template>

<style lang="less" src="./style.less"></style>

<script>
	import ChessTattoo from 'components/chess-tattoo/.vue'
	import ChessMan from 'components/chess-man/.vue'
	import {needsTattoo, findChessMan, findPosition} from './util'

	export default {
		props: {
			chessmans: {
				type: Array,
				default: []
			},
			activeChessman: {
				type: Object,
				default: null
			},
			playedChessman: {
				type: Object,
				default: null
			},
			steppedPositions: {
				type: Array,
				default: []
			},
			steppingPositions: {
				type: Array,
				default: []
			},
		},
	  components: {
	    ChessTattoo,
	    ChessMan
	  },
		methods: {
			needsTattoo(rowIndex, cellIndex) {
				return needsTattoo({rowIndex, cellIndex})
			},
			hasChessMan(rowIndex, cellIndex) {
				return !!this.getChessMan(rowIndex, cellIndex)
			},
			getChessManName(rowIndex, cellIndex) {
				const chessman = this.getChessMan(rowIndex, cellIndex)
				return chessman && chessman.name
			},
			getChessMan(rowIndex, cellIndex) {
				return findChessMan(this.chessmans, {rowIndex, cellIndex})
			},
			onClick () {
				// TODO
			}
		}
	}
</script>