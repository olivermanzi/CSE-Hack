<template>
  <div>
    <!-- navigation bar -->
    <nav class="sticky-top">
      <div class="container-fluid" id="navBar">
        <div class="row navbar navbar-expand-sm" role="navigation">
          <div class="collapse navbar-collapse" id="navigationToggle">
            <div class="col-sm-2" id="navItem">
              <router-link to="/" class="nav-link">Home</router-link>
              <!-- <a class="nav-link" v-bind:href="facebook">CSE Hackathon</a> -->
            </div>
            <div class="col-sm-1 offset-4" id="navItem">
              <router-link to="/cases" class="nav-link">Cases</router-link>
            </div>
            <div class="col-sm-1" id="navItem">
              <router-link to="/schedule" class="nav-link">Schedule</router-link>
            </div>
            <div class="col-sm-1" id="navItem">
              <router-link to="/organizers" class="nav-link">Organizers</router-link>
            </div>
            <div class="col-sm-1" id="navItem">
              <router-link to="/partners" class="nav-link">Partners</router-link>
            </div>
            <div class="col-sm-1" id="navItem">
              <router-link to="/terms" class="nav-link">Terms</router-link>
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

<style>
/* @import "~assets/style/global.css"; */
@import url("~assets/style/global.css");
</style>

