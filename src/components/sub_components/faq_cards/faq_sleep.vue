<template>
    <div class="card">
        <div class="card-header" id="sleepHead">
            <h5 class="mb-0">
                Can I sleep at the event?
                <!--<button class="btn btn-dark btn-block collapsed" data-toggle="collapse" data-target="#whatIsSleep" aria-expanded="false" aria-controls="whatIsSleep">
                Do I need to speak Swedish?
                </button>-->
            </h5>
        </div>
        <div id="whatIsSleep" class="collapse show" aria-labelledby="sleepHead" data-parent="#faqSection">
            <div class="card-body">
                Unfortunately participants are not allowed to sleep on the venue. We need to clear the venue before 10:00 pm, and we restart
                the next morning around 8:00 am.              
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "faqsleep",
  data() {
  }
};
</script>

<style scoped>
@import "../../../assets/style/temp_style/temp_style.css";
</style>