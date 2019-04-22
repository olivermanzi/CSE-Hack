<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 offset-sm-3 sectionTitle" id="case-title">
                    <h2>The Cases</h2>
                    <hr>
                    <h5><i>To Be Announced</i></h5>
                </div>
            </div>
            <!-- TODO: Template below for the cases once they're announced -->
            <div class="row">
                <div class="col-sm-10 offset-sm-1">
                    <div class="card-columns">
                        <div class="card text-white bg-dark mb-3" style="max-width: 100%;">
                            <!--<div>
                                <img class="card-img-top" src="img/stock/event.jpg" alt="event">
                            </div>-->
                            <case_example></case_example>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import case_example from "./sub_components/cases/case_example";
export default {
  name: "Cases",
  components: {
    case_example
  }
};
</script>