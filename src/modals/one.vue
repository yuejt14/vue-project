<template>
  <vue-final-modal>
    <div>hello this is number one</div>
    <button @click="open(close)"> ONE</button>
    <slot />
  </vue-final-modal>
</template>

<script>
import two from "./two.vue";

export default {

  methods: {
    open(close){
      // close();
      const that = this;
      close();
      that.$vfm.show({
        component: two,
        on: {
          confirm() {
            console.log("One received from two");
            that.$emit("confirm");
          }
        }
      });

    }
  }
};
</script>

<style scoped>

</style>
