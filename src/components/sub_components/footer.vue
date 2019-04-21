<template>
  <!-- footer -->
  <!-- <div id="foot">
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
  </div>-->
  <div class="cat-footer container-fluid">
    <div class="cat-info row">
      <div class="cat-contact col-sm-3">
        <h3>Contact</h3>
        <ul>
          <li>
            <a v-bind:href="facebook">Facebook</a>
          </li>
          <li>
            Email
            <a v-bind:href="mail">cat@gota.gu.se</a>
          </li>
        </ul>
      </div>
      <div class="cat-location col-sm-3">
        <h3>Location</h3>
        <ul>
          <li>
            <p>address here</p>
          </li>
        </ul>
      </div>
      <div class="cat-signup col-sm-3">
        <h3>Become a member of Ctrl-Alt-Team</h3>
        <ul>
          <li>
            click
            <a v-bind:href="signup">here</a>
          </li>
        </ul>
      </div>
      <div class="cat-gu col-sm-3">
        <h3>Interesetd in Gothenburg University's Computer Science Department?</h3>
        <ul>
          <li>
            Click
            <a v-bind:href="gu">here</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cat-legal row">
      <div class="col-sm-3">
        <p>Copyright &copy; 2019 CTR-Alt-TEAM. All rights reserved.</p>
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
      mail: links.mail_link,
      signup: links.cat_signup,
      gu: links.gu
    };
  }
};
</script>

<style scoped>
.cat-footer {
  background-color: black;
  text-decoration: none;
  color: white;
  font-family: "Inconsolata", monospace;
  font-size: 1em;

  /* since the container in the app component is set to the height of the screen,
we position the footer at the bottom of the page absolute to the container that the footer is in.
in other words, footer is inside another container that has the height of the entire screen and
a relative position 
source: https://medium.freecodecamp.org/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c */
  position: absolute;
  bottom: 0;
  width: 100%;
}
.cat-footer h3 {
  font-size: 1.2em;
}
.cat-contact h3 {
  color: white;
}
.cat-location h3 {
  color: green;
}
.cat-signup h3 {
  color: yellow;
}
.cat-gu h3 {
  color: blueviolet;
}
.cat-legal {
  font-size: 0.8em;
}
</style>


