<template>
  <div class="border">
    <navigation_bar></navigation_bar>
    <router-view class="content"></router-view>
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
.content {
  width: 100%;
  height: 100%;
  border: 15px solid red;
}
.border {
  border: 100px solid red;
}
</style>
