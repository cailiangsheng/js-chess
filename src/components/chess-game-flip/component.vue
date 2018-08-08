<template>
  <div class="chess-game flip">
	  <ChessStatus :winnerColor="winnerColor"
      :playerColor="playerColor" />
		<div class="chess-frames">
			<div class="left">
				<ChessManList :names="redNames" />
			</div>
			<div class="chess-body">
				<ChessBoardFlip />
				<ChessGridFlip :chessmans="chessmans"
          :activeChessman="activeChessman"
					:steppingPositions="steppingPositions"
          :steppedPositions="steppedPositions"
					@onClick="onClick" />
			</div>
			<div class="right">
				<ChessManList :names="blackNames" />
			</div>
		</div>
	</div>
</template>

<style lang="less" src="./style.less"></style>

<script>
import ChessBoardFlip from "components/chess-board-flip/.vue";
import ChessGridFlip from "components/chess-grid-flip/.vue";
import ChessManList from "components/chess-man-list/.vue";
import ChessStatus from "components/chess-status/.vue";
import { isRed, isBlack } from "components/chess-man/util";
import _ from "lodash";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ChessBoardFlip,
    ChessGridFlip,
    ChessManList,
    ChessStatus
  },
  computed: {
    ...mapState([
      "killedNames",
      "chessmans",
      "activeChessman",
      "steppingPositions",
      "steppedPositions",
      "winnerColor",
      "playerColor"
    ]),
    redNames() {
      return _.filter(this.killedNames, isRed);
    },
    blackNames() {
      return _.filter(this.killedNames, isBlack);
    }
  },
  methods: mapActions({
    onClick: "clickChessGrid"
  })
};
</script>
