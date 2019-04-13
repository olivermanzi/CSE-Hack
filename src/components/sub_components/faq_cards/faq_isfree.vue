<template>
    <div class="card">
        <div class="card-header" id="isFree">
            <h5 class="mb-0">Is it free?
            <!--<button class="btn btn-dark btn-block collapsed" data-toggle="collapse" data-target="#isFree" aria-expanded="false" aria-controls="isFree">
            Is it free?
            </button>-->
            </h5>
        </div>
        <div id="isFree" class="collapse show faqCards" aria-labelledby="headingTwo" data-parent="#faqSection">
            <div class="card-body">
                <p>Nothing in this world is free... but the CSE Hackathon 2.0 is absolutely free!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "faqisfree",
  data() {
  }
};
</script>

<style scoped>
@import "../../../assets/style/temp_style/temp_style.css";
</style>