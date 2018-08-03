<template>
	<div class="chess-status">
		<div class="winner" v-bind:class="winnerColor" />
		<div class="player" v-bind:class="playerColor" />
	</div>
</template>

<style lang="less" src="./style.less"></style>

<script>
export default {
  props: {
    winnerColor: {
      type: String,
      default: ""
    },
    playerColor: {
      type: String,
      default: ""
    }
  }
};
</script>