<template>
  <div class="col-sm-4 offset-sm-4 signup">
    <button type="button" class="btn btn-success btn-lg" v-bind:href="register_link">Register</button>
  </div>
</template>

<script>
import links from "./../../assets/values/links.js";
export default {
  name: "sign-up",
  data() {
    return {
      register_link: link.register_link
    };
  }
};
</script>

<style scoped>
</style>
