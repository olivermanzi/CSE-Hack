<template>
        <div class="container-fluid">
            <div class="row">
                <div class='col-sm-3'></div>
                <div class="sectionTitle col-sm-6">
                    <h2>Frequently asked Questions</h2>
                </div>
                <div class='col-sm-3'></div>
            </div>

            <div class="col-sm-6 offset-3 sectionText" id="faq">
                <faqwhatishack></faqwhatishack>
                <faqisfree></faqisfree>
                <faqlanguage></faqlanguage>
                <faqsleep></faqsleep>
                <faqadvice></faqadvice>
                <faqfood></faqfood>
                <faqlinks></faqlinks>

            </div>
        </div>
</template>

<script>
import faqwhatishack from "./sub_components/faq_cards/faq_whatishack";
import faqisfree from "./sub_components/faq_cards/faq_isfree";
import faqlanguage from "./sub_components/faq_cards/faq_language";
import faqsleep from "./sub_components/faq_cards/faq_sleep";
import faqadvice from "./sub_components/faq_cards/faq_advice";
import faqfood from "./sub_components/faq_cards/faq_food";
import faqlinks from "./sub_components/faq_cards/faq_links";

export default {
  name: "faq",
  components: {
    faqwhatishack,
    faqisfree,
    faqlanguage,
    faqsleep,
    faqadvice,
    faqfood,
    faqlinks
  },
  data() {

  }
};
</script>

<style scoped>
    @import "../assets/style/temp_style/temp_style.css";
</style>