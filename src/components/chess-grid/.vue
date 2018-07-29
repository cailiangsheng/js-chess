<template>
	<table class="chess-grid">
    <tbody>
      <tr class="row" v-for="i in 10" :key="i">
      	<td class="cell" v-for="j in 9" :key="j">
	      </td>
      </tr>
    </tbody>
	</table>
</template>

<style lang="less" src="./style.less"></style>