<template>
	<table class="chess-grid">
    <tbody>
      <tr class="row" v-for="(v, i) in numRows" :key="i">
      	<td class="cell" v-for="(v, j) in numCells" :key="j" @click="onClick(i, j)">
      		<ChessTattoo v-if="showTattoo && needsTattoo(i, j)" />
        	<ChessStepped v-if="isStepped(i, j)" />
      		<ChessMan v-if="hasChessMan(i, j)"
            :name="getChessManName(i, j)"
            :isActive="isActiveChessman(i, j)"
            :isHidden="isHiddenChessman(i, j)" />
        	<ChessStepping v-if="isStepping(i, j)" />
	      </td>
      </tr>
    </tbody>
	</table>
</template>

<style lang="less" src="./style.less"></style>

<script>
import ChessTattoo from "components/chess-tattoo/.vue";
import ChessStepped from "components/chess-stepped/.vue";
import ChessStepping from "components/chess-stepping/.vue";
import ChessMan from "components/chess-man/.vue";
import { needsTattoo, findChessMan, findPosition } from "./util";

export default {
  props: {
    numRows: {
      type: Number,
      default: 10
    },
    numCells: {
      type: Number,
      default: 9
    },
    showTattoo: {
      type: Boolean,
      default: true
    },
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
  components: {
    ChessTattoo,
    ChessStepped,
    ChessStepping,
    ChessMan
  },
  methods: {
    needsTattoo(rowIndex, cellIndex) {
      const position = { rowIndex, cellIndex };
      return needsTattoo(position);
    },
    isStepped(rowIndex, cellIndex) {
      const position = { rowIndex, cellIndex };
      return findPosition(this.steppedPositions, position);
    },
    isStepping(rowIndex, cellIndex) {
      const position = { rowIndex, cellIndex };
      return findPosition(this.steppingPositions, position);
    },
    hasChessMan(rowIndex, cellIndex) {
      return !!this.getChessMan(rowIndex, cellIndex);
    },
    isActiveChessman(rowIndex, cellIndex) {
      const position = { rowIndex, cellIndex };
      return this.activeChessman && _.isEqual(position, this.activeChessman.position)
    },
    isHiddenChessman (rowIndex, cellIndex) {
      const chessman = this.getChessMan(rowIndex, cellIndex);
      return chessman && chessman.isHidden;
    },
    getChessManName(rowIndex, cellIndex) {
      const chessman = this.getChessMan(rowIndex, cellIndex);
      return chessman && chessman.name;
    },
    getChessMan(rowIndex, cellIndex) {
      const position = { rowIndex, cellIndex };
      return findChessMan(this.chessmans, position);
    },
    onClick(rowIndex, cellIndex) {
      const position = { rowIndex, cellIndex };
      const name = this.getChessManName(rowIndex, cellIndex);
      const target = { name, position };
      this.$emit("click", target);
    }
  }
};
</script>