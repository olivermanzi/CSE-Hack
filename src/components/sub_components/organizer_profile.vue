<template>
  <div id="organizer_card" class="card" style="width: 18rem;">
    <img id="organizer_img" class="card-img-top" v-bind:src="organizer.img" alt="organizer">
    <div id="organizer_text" class="card-body">
      <h5 id="organizer_text" class="card-title">{{organizer.name}}</h5>
      <p class="card-text">CSE Team!</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
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
</style>