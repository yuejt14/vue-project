<template>
  <vue-final-modal
      v-slot='{ close }'
      v-bind='$attrs'
      :hide-overlay="true"
      @opened="$emit('opened')"
      @closed="$emit('closed')">
    <div>hello this is number one</div>
    <button @click="openTwo(close)"> ONE</button>
    <slot />
  </vue-final-modal>
</template>

<script>
import two from "./two.vue";

export default {
  name: "one",
  methods: {
    openTwo(close){
      console.log("Opening two");
      const that = this;
      this.$vfm.show({
        component: two,
        closeModals: true,        on: {
          confirmTwo() {
            console.log("One received from two");
            that.$emit("confirmTwo");
          }
        }
      });
    }
  }
};
</script>
