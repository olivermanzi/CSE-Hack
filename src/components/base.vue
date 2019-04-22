<template>
  <div class="cat-welcome container-fluid">
    <div class="row">
      <div class="cat-title col-sm-4 offset-sm-1">
        <h1>CSE</h1>
        <h1>HACK</h1>
        <h2>10th-12th May, 2019</h2>
      </div>
      <div class="cat-signup col-sm-6">
        <p v-html="text.hackathon_description"></p>
        <button
          type="button"
          class="btn btn-success btn-lg"
          v-bind:href="cat_data.signup"
        >Click me to Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import cat_data from "./../assets/values/links.js";
import text from "./../assets/values/text.js";
export default {
  name: "Base",
  data() {
    return {
      cat_data: cat_data,
      text: text
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Anton|Inconsolata|Roboto+Slab");

.cat-welcome {
  background: black;
  color: white;
  min-height: 50vh;
}
.cat-welcome h1 {
  font-size: 10em;
}
.cat-welcome h2 {
  color: red;
}

.cat-title {
  font-family: "Roboto Slab", serif;
  padding: 5% 0%;
}

.cat-signup {
  text-align: center;
  align-content: center;
  justify-content: center;
}
.cat-signup p {
  font-family: "Inconsolata", monospace;
  font-size: 1.5em;
  padding: 10% 5%;
}
</style>