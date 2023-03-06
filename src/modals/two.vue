<template>
  <vue-final-modal>
    <div>hello this is number Two</div>
    <button @click="open(close)"> Two</button>
    <slot />
  </vue-final-modal>
</template>

<script>
export default {
  name: "two",

  methods: {
    open(){
      console.log("Two is emitting confirm");
      this.$emit("confirm");
    }
  }
};
</script>

<style scoped>

</style>
