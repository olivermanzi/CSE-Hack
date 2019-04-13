<template>
    <div class="card">
        <div class="card-header" id="languageHead">
            <h5 class="mb-0">
                Do I need to speak Swedish?
                <!--<button class="btn btn-dark btn-block collapsed" data-toggle="collapse" data-target="#whatIsLanguage" aria-expanded="false" aria-controls="whatIsLanguage">
                Do I need to speak Swedish?
                </button>-->
            </h5>
        </div>
        <div id="whatIsLanguage" class="collapse show" aria-labelledby="languageHead" data-parent="#faqSection">
            <div class="card-body">
                You can speak whatever language you want within your team. However, presentations will be done in english... and so will
                most of the mingling.                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "faqlanguage",
  data() {
  }
};
</script>

<style scoped>
@import "../../../assets/style/temp_style/temp_style.css";
</style>