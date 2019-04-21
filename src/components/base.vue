<template>
  <div>
    <!-- header -->
    <header>
      <div class="container" id="header">
        <div class="row">
          <div id="title" class="sectionTitle">
            <h2>Coming soon...</h2>
          </div>
        </div>
      </div>
    </header>

    <!-- signup -->
    <register_button></register_button>
  </div>
</template>

<script>
import register_button from "./sub_components/register_button";
export default {
  name: "Base",
  components: {
    register_button
  }
};
</script>

<style scoped>
@import "./../assets/style/temp_style/temp_banner.css";
</style>