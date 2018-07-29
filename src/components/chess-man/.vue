<template>
	<div class="chess-man color">
	  <span>{{name}}</span>
	</div>
</template>

<style lang="less" src="./style.less"></style>

<script>
	import {validNames, getColor} from './util'

	export default {
		props: {
			name: {
				type: String,
				default: '象'
			},
			isActive: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			color() {
				return getColor(this.name)
			}
		},
		methods: {
			onClick () {
				// TODO
			}
		}
	}
</script>