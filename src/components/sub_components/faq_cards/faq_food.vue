<template>
    <div class="card">
        <div class="card-header" id="foodHead">
        <h5 class="mb-0">
            What's the food situation like?
                    <br>
                    <small class="text-muted">(asking for a friend)</small>
            <!--<button class="btn btn-dark btn-block collapsed" data-toggle="collapse" data-target="#whatIsFood" aria-expanded="false" aria-controls="whatIsFood">
            Do I need to speak Swedish?
            </button>-->
        </h5>
        </div>
        <div id="whatIsFood" class="collapse show" aria-labelledby="foodHead" data-parent="#faqSection">
            <div class="card-body">
                Food will be provided by the organizers. You will be stuffed with pizza, candy and red bull until you tap out.       
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "faqfood",
  data() {
  }
};
</script>

<style scoped>
@import "../../../assets/style/temp_style/temp_style.css";
</style>