<template>
  <div class="chess-man-list">
	<div class="chess-man-list-item" v-for="(name, index) in uniqNames">
		<ChessMan :name="name" :key="index" />
		<div class="chess-man-count" v-if="countNames[name] > 1">
			{{countNames[name]}}
		</div>
	</div>
  </div>
</template>

<style lang="less" src="./style.less"></style>

<script>
import ChessMan from 'components/chess-man/.vue';
import { getType } from "components/chess-man/util";
import _ from "lodash";

export default {
  props: {
    names: {
      type: Array,
      default: []
    }
  },
  components: {
    ChessMan
  },
  computed: {
    countNames() {
      return _.countBy(this.names, name => name);
    },
    uniqNames() {
      const uniqNames = _.uniq(this.names);
      uniqNames.sort((name1, name2) => getType(name1) - getType(name2));
      return uniqNames;
    }
  },
  methods: {
    onClick() {
      // TODO
    }
  }
};
</script>