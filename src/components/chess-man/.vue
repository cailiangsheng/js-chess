<template>
	<div class="chess-man" v-bind:class="classNames">
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
			},
			isHidden: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			classNames() {
				const color = getColor(this.name)
				return {
					[color]: true,
					'active': this.isActive,
					'hidden': this.isHidden
				}
			}
		},
		methods: {
			onClick () {
				// TODO
			}
		}
	}
</script>