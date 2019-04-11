<template>
  <!-- organizers -->
  <div id="team">
    <div class="container-fluid">
      <div class="row">
        <div id="teamText">
          <div class="sectionTitle">
            <h2>The Organizers</h2>
          </div>
        </div>
      </div>

      <div class="card-deck">
        <organizer_profile
          v-for="organizer in list1"
          v-bind:key="organizer"
          v-bind:organizer="organizer"
        ></organizer_profile>
      </div>
      <div class="card-deck">
        <organizer_profile
          v-for="organizer in list2"
          v-bind:key="organizer"
          v-bind:organizer="organizer"
        ></organizer_profile>
      </div>
      <div class="card-deck">
        <organizer_profile
          v-for="organizer in list3"
          v-bind:key="organizer"
          v-bind:organizer="organizer"
        ></organizer_profile>
      </div>
      <div class="card-deck">
        <organizer_profile
          v-for="organizer in list4"
          v-bind:key="organizer"
          v-bind:organizer="organizer"
        ></organizer_profile>
      </div>
    </div>
  </div>
</template>

<script>
import organizer_profile from "./sub_components/organizer_profile";
import organizer_list from "../assets/values/organizers.js";
export default {
  name: "organizers",
  components: {
    organizer_profile
  },
  data() {
    return {
      list1: organizer_list.data.batch1,
      list2: organizer_list.data.batch2,
      list3: organizer_list.data.batch3,
      list4: organizer_list.data.batch4
    };
  }
};
</script>

<style scoped>
@import "./../assets/style/temp_style/temp_organizers.css";
</style>