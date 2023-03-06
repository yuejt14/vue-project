<script>
import one from "../modals/one.vue";

export default {
  methods: {
    open(){
      console.log("opening one");
      this.$vfm.show({
        component: one,
        on: {
          confirm() {
            console.log("Home received confirm from one");
          }
        }
      });
    }
  }
}
</script>

<template>
  <div>this is home</div>
  <button @click="open"> test </button>
</template>
