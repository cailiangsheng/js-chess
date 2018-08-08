<template>
	<ChessGrid :showTattoo="false"
		:numRows="numRows"
		:numCells="numCells"
		:chessmans="chessmans"
		:activeChessman="activeChessman"
		:playedChessman="playedChessman"
		:steppedPositions="steppedPositions"
		:steppingPositions="steppingPositions" />
</template>

<style lang="less" src="../chess-grid/style.less"></style>

<script>
import ChessGrid from "components/chess-grid/.vue";
import CONSTS from "./consts";

export default {
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
  computed: {
    numRows: CONSTS.NUM_ROWS,
    numCells: CONSTS.NUM_CELLS
  },
  components: {
    ChessGrid
  }
};
</script>