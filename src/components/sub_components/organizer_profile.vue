<template>
  <div class="slide-content" id="teamPic">
    <img class="d-block img-fluid" v-bind:src="organizer.img" alt="First slide">
    <div class="img-desc">
      <h5>{{organizer.name}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "organizer_profile",
  props: ["organizer"]
};
</script>

<style scoped>
@import "./../../assets/style/temp_style/temp_organizers.css";
</style>