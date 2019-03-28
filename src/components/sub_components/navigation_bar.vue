<template>
  <div>
    <!-- navigation bar -->
    <nav class="sticky-top">
      <div class="container-fluid" id="navBar">
        <div class="row navbar navbar-expand-sm" role="navigation">
          <div class="collapse navbar-collapse" id="navigationToggle">
            <div class="col-sm-0" id="navItem">
              <a class="nav-link" v-bind:href="facebook">CSE Hackathon</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import links from "./../../assets/values/links";
export default {
  name: "navigation_bar",
  data() {
    return {
      facebook: links.facebook_link
    };
  }
};
</script>

<style scoped>
@import "./../../assets/style/temp_style/temp_navigation_bar.css";
</style>

