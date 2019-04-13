<template>
    <div class="card">
        <div class="card-header" id="adviceHead">
            <h5 class="mb-0">
                Is there any advice?
                <!--<button class="btn btn-dark btn-block collapsed" data-toggle="collapse" data-target="#whatIsAdvice" aria-expanded="false" aria-controls="whatIsAdvice">
                Do I need to speak Swedish?
                </button>-->
            </h5>
        </div>
        <div id="whatIsAdvice" class="collapse show" aria-labelledby="adviceHead" data-parent="#faqSection">
            <div class="card-body">
                <div class="card-text">
                    <p>There is no
                        <hlt>I</hlt> in
                        <hlt>TEAM</hlt>. So, remember to build a good team with a variety of expertise
                        so everyone can share and learn from one another.
                    </p>
                    <p>Being friendly (not FRIENDS) is essencial for collaboration in a Hackathon. Especially
                        among different teams. Remember, everyone is in the same boat: sink or swim.
                    </p>
                    <hr>
                    <p>You
                        <hlt>can come with a team</hlt> of yours or meet people and
                        <hlt>join/form teams</hlt> in our brainstorming evening. Remember that
                        <hlt>they have to be CSE students</hlt>.
                    </p>
                    <hr>
                    <p>
                        <hlt>Delegating tasks</hlt> is important. Explore everyone's unique capabilities:
                        Divide and conquer!</p>
                        <p>Try to assign different responsibilities, for instance:</p>
                        <ul>
                            <li>
                                <p>
                                    <hlt>Coding</hlt>: Front-end, back-end, ripping data from websites, ...
                                </p>
                            </li>
                            <li>
                                <p>
                                    <hlt>Presentation</hlt>: Pitching the idea (slides, catch phrases), designing
                                        the interface, ...
                                </p>
                            </li>
                            <li>
                                <p>
                                    <hlt>Dev. Process</hlt>: Using tools (git, APIs, etc.) properly, track
                                    time and goals, talk with organization,...
                                </p>
                            </li>
                        </ul>
                        <hr>
                        <p>There are lots of tips on winning and enjoying Hackathon. Here is
                            <a href="https://goo.gl/goXESf" target="_blank">
                                <hlt>one</hlt>
                            </a>, this is
                            <a href="https://hackathon.guide/" target="_blank">
                                <hlt>another</hlt>
                            </a>, or you
                            <a href="http://lmgtfy.com/?q=how+to+win+a+hackathon" target="_blank">
                                <hlt>simply do this</hlt>
                            </a>.</p>
                            <p>
                                <hlt>Above all</hlt>: Be fun, creative and learn lots of new stuff (technical
                                and personal).</p>
                            <hr>
                    </div>          
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "faqadvice",
  data() {
  }
};
</script>

<style scoped>
@import "../../../assets/style/temp_style/temp_style.css";
</style>