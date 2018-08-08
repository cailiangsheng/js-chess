<template>
	<ChessGrid :showTattoo="false"
		:numRows="numRows"
		:numCells="numCells"
		:chessmans="chessmans"
		:activeChessman="activeChessman"
		:steppedPositions="steppedPositions"
		:steppingPositions="steppingPositions" />
</template>

<style lang="less" src="../chess-grid/style.less"></style>

<script>
import ChessGrid from "components/chess-grid/.vue";
import CONSTS from "./consts";

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
    steppedPositions: {
      type: Array,
      default: []
    },
    steppingPositions: {
      type: Array,
      default: []
    }
  },
  computed: {
    numRows() {
      return CONSTS.NUM_ROWS
    },
    numCells() {
      return CONSTS.NUM_CELLS
    }
  },
  components: {
    ChessGrid
  }
};
</script>