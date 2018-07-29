<template>
	<div class="chess-winner" v-bind:class="winnerColor" />
</template>

<style lang="less" src="./style.less"></style>

<script>
	export default {
		props: {
			winnerColor: {
				type: String,
				default: ''
			}
		}
	}
</script>