<template>
    <div>
        <b-card
            title="Card Example"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 100rem; color: black;"
            class="mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button v-b-modal.case-1 variant="primary">Go somewhere</b-button>
        </b-card>

        <b-modal id="case-1" title="Case Example" style="color: black;" hide-footer="true">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in pulvinar metus. Cras 
            tincidunt posuere nulla, sed maximus eros pellentesque at. Sed et molestie quam, non lacinia magna. 
            Pellentesque egestas libero lectus, sed ornare ante malesuada vitae. Aliquam commodo at tellus ac 
            convallis. Donec egestas posuere tincidunt </p>
        </b-modal>

    </div>
</template>

<script>
export default {
  name: "case_example"
};
</script>