<template>
	<div class="chess-board flip">
    <table>
      <tbody>
        <tr class="row" v-for="i in 8" :key="i">
        	<td class="cell" v-for="j in 4" :key="j" />
        </tr>
      </tbody>
  	</table>
  </div>
</template>

<style lang="less" src="./style.less"></style>