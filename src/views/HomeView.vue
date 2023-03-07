<script>
import one from "../modals/one.vue";
export default {

  methods: {
    openOne(){
      console.log("opening one");
      let that = this;
      that.$vfm.show({
        component: one,
        on: {
          confirmTwo() {
            console.log("Home received confirm");
          }
        }
      });
    }
  }
}
</script>

<template>
  <div>
    <div>this is home</div>
    <button @click="openOne"> test </button>
  </div>
</template>
