<template>
  <div class="cat-page-container">
    <navigation_bar></navigation_bar>
    <!-- <router-view class="cat-content"></router-view> -->
    <page_footer></page_footer>
  </div>
</template>

<script>
import navigation_bar from "./components/sub_components/navigation_bar";
import page_footer from "./components/sub_components/footer";
export default {
  name: "App",
  components: {
    navigation_bar,
    page_footer
  }
};
</script>

<style>
.cat-content {
  border: 15px solid red;
}
.cat-page-container {
  /* min-hieght is set to 100% to ensure that 
  the main content is always "filled" even when 
  there is no content actually there. this prevents 
  footer from jumping up to the middle of the page */
  position: relative;
  min-height: 100vh;
}
</style>
