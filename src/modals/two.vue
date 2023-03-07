<template>
  <vue-final-modal
      v-slot='{ close }'
      v-bind='$attrs'
      :hide-overlay="true"
      @opened="$emit('opened')"
      @closed="$emit('closed')">
    <div>hello this is number Two</div>
    <button @click="confirm(close)"> Two</button>
    <slot/>
  </vue-final-modal>
</template>

<script>
export default {
  name: "two",
  methods: {
    confirm (close) {
      close();
      console.log("Two is emitting confirm");

      this.$emit("confirmTwo");
    }
  }
};
</script>
