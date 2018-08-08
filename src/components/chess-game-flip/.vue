
<template>
	<ChessGame />
</template>

<script>
import ChessGame from "./component.vue";
import store from "./vuex/store";

export default {
  store,
  components: {
    ChessGame
  }
};
</script>
