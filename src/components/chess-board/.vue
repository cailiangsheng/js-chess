<template>
	<div class="chess-board">
    <table>
      <tbody>
        <tr class="row" v-for="i in 9" :key="i">
        	<td class="cell" v-for="j in 8" :key="j" />
        </tr>
      </tbody>
  	</table>
  </div>
</template>

<style lang="less" src="./style.less"></style>