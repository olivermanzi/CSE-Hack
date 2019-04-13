<template>
        <div class="card">
            <div class="card-header" id="whatIsHackHead">
                <h5 class="mb-0">
                <!--<button class="btn btn-dark btn-block" data-toggle="collapse" data-target="#whatIsHack" aria-expanded="true" aria-controls="whatIsHack">-->
                What is a hackathon?
                </h5>
            </div>

            <div id="whatIsHack" class="collapse show faqCards" aria-labelledby="whatIsHackHead" data-parent="#faqSection">
                <div class="card-body">
                    <p>The Hackathon is a <hlt>48 hour</hlt> (non-stop) event where groups of students engage in creative and
                        development activities related to application development. The goal is to hack
                        data openly available in the Internet and then create an app using the data.
                    </p>
                    <hr>
                    <p>Basically you will be doing:</p>
                        <div class="row">
                            <div class="col-sm-6">
                                <p>THIS</p>
                                    <iframe src="https://www.youtube.com/embed/6VakF2hZFPQ" frameborder="0" allowfullscreen>
                                    </iframe>
                            </div>
                            <div class="col-sm-6">
                                <p>NOT THIS</p>
                                    <iframe src="https://www.youtube.com/embed/hqKafI7Amd8" frameborder="0" allowfullscreen>
                                    </iframe>
                            </div>
                        </div>
                    <p/>
                    <p>The development happens throughout the entire 48 hours, but you do not need to stay
                    there the whole time... your competitor might. ;) 
                    </p>                
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "faqwhatishack",
  data() {
  }
};
</script>

<style scoped>
@import "../../../assets/style/temp_style/temp_style.css";
</style>