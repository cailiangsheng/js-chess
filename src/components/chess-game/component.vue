<template>
	<div class="chess-game normal">
		  <ChessStatus :winnerColor="winnerColor"
		  	:playerColor="playerColor" />
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
import _ from "lodash";
import ChessStatus from "components/chess-status/.vue";
import ChessBoard from "components/chess-board/.vue";
import ChessGrid from "components/chess-grid/.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ChessStatus,
    ChessBoard,
    ChessGrid
  },
  computed: mapState([
    "chessmans",
    "activeChessman",
    "playerColor",
    "steppedPositions",
    "steppingPositions",
    "winnerColor"
  ]),
  methods: mapActions({
    onClick: "clickChessGrid"
  })
};
</script>
