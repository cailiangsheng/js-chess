<template>
	<div class="chess-status" v-bind:class="statusClass">
		<div class="winner" v-if="winnerColor" v-bind:class="winnerColor" />
		<div class="player" v-if="playerName">
      <ChessMan :name="playerName" />
		</div>
	</div>
</template>

<style lang="less" src="./style.less"></style>

<script>
import ChessMan from 'components/chess-man/.vue'
import {getName} from 'components/chess-man/util'
import CHESS_MAN from 'components/chess-man/consts'

export default {
  components: {
    ChessMan
  },
  props: {
    winnerColor: {
      type: String,
      default: ""
    },
    playerColor: {
      type: String,
      default: ""
    }
  },
  computed: {
    statusClass() {
      return !this.winnerColor && !this.playerColor ? 'initial' : ''
    },
    playerName() {
      return !this.winnerColor && this.playerColor
        && getName({type: CHESS_MAN.TYPE.JIANG, color: this.playerColor})
    }
  }
};
</script>