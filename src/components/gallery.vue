<template>
  <div>
    <gallery
      :images="images"
      :index="index"
      :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
      @close="index = null"
    ></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image.poster + ')' ,width: '300px', height: '200px'}"
      
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      images: [ //Not a good naming convention since there are videos in the array of objects here
        {
        title: "Dummy Pic",
        href: "https://dummyimage.com/800/ffffff/000000",
        type: "text/html",
        poster: "https://dummyimage.com/800/ffffff/000000"
        },
        {
          title: "A YouYube video",
          href: "https://www.youtube.com/watch?v=hNdlUHBJDKs",
          type: "text/html",
          youtube: "hNdlUHBJDKs",
          poster: "https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg"
        }
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script> 

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>