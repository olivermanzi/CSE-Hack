<template>
  <!-- footer -->
  <div id="foot">
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
  </div>
</template>

<script>
import links from "./../../assets/values/links";
export default {
  name: "footer",
  data() {
    return {
      facebook: links.facebook_link,
      mail: links.mail_link
    };
  }
};
</script>

<style scoped>
@import "./../../assets/style/temp_style/temp_footer.css";
</style>


