<template>
  <div id="app">
    <navigation_bar></navigation_bar>
    <router-view/>

    <!-- footer -->
    <footer id="foot">
      <div class="container-fluid">
        <div id="quote">
          <p>Contact us:</p>
          <ul>
            <li>
              <p>
                <a v-bind:href="facebook">Facebook</a>
              </p>
            </li>
            <li>
              <p>
                <a v-bind:href="mail">Gmail</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row" id="copyRight">
          <div class="col-sm-6 offset-sm-3">
            <p>Copyright &copy; SE Division 2019</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import navigation_bar from "./components/sub_components/navigation_bar";
import footer from "./components/sub_components/footer";
import links from "./assets/values/links.js";
export default {
  name: "App",
  components: {
    navigation_bar,
    footer
  },
  data() {
    return {
      facebook: link.facebook_link,
      mail: link.mail_link
    };
  }
};
</script>

<style scoped>
@import "./assets/style/temp_style/temp_style.css";
@import "./assets/style/temp_style/temp_footer.css";
#app {
  height: 100%;
  width: 100%;
  border: 20px, solid, black;
}
</style>


