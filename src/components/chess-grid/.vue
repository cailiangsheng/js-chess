<template>
	<table class="chess-grid">
    <tbody>
      <tr class="row" v-for="(v, i) in 10" :key="i">
      	<td class="cell" v-for="(v, j) in 9" :key="j">
      		<ChessTattoo v-if="needsTattoo(i, j)"/>
	      </td>
      </tr>
    </tbody>
	</table>
</template>

<style lang="less" src="./style.less"></style>

<script>
	import ChessTattoo from 'components/chess-tattoo/.vue'
	import {needsTattoo, findChessMan, findPosition} from './util'
	import CONSTS from './consts'

	const rowRange = Array.from({length: CONSTS.NUM_ROWS}, (v, i) => i)
	const cellRange = Array.from({length: CONSTS.NUM_CELLS}, (v, j) => j)

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
	    ChessTattoo
	  },
		methods: {
			needsTattoo(rowIndex, cellIndex) {
      	const position = {rowIndex, cellIndex}
				return needsTattoo(position)
			},
			onClick () {
				// TODO
			}
		}
	}
</script>