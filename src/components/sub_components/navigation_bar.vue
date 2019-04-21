<template>
  <div class="cat-navbar container-fluid">
    <div class="row navbar navbar-expand-sm sticky-top" role="navigation">
      <div class="collapse navbar-collapse" id="navigationToggle">
        <div class="cat-navbar-text-base col-sm-2">
          <router-link class="cat-navbar-text" to="/">Home</router-link>
        </div>
        <div class="col-sm-4 dummy-column"></div>
        <div class="col-sm-1 nav-link">
          <router-link class="cat-navbar-text" to="/cases">Cases</router-link>
        </div>
        <div class="col-sm-1 nav-link">
          <router-link class="cat-navbar-text" to="/schedule">Schedule</router-link>
        </div>
        <div class="col-sm-1 nav-link">
          <router-link class="cat-navbar-text" to="/organizers">Organizers</router-link>
        </div>
        <div class="col-sm-1 nav-link">
          <router-link class="cat-navbar-text" to="/partners">Partners</router-link>
        </div>
        <div class="col-sm-1 nav-link">
          <router-link class="cat-navbar-text" to="/terms">Terms</router-link>
        </div>
      </div>
    </div>
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

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata");
/* @import "../../assets/style/a_big_css_file.css"; */
.cat-navbar {
  background-color: black;
}
.cat-navbar-text {
  text-decoration: none;
  color: white;
  font-family: "Inconsolata", monospace;
  font-size: 1.5em;
  font-weight: bold;
}
.cat-navbar-text-base {
  text-align: center;
}
</style>

