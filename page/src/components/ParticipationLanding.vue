<template>
  <div style="margin-top: -80px;">
    <h1>Welcome to the dføur Xmas Mapping Challenge 2021!</h1>
    <p>
      <a href="https://xmas.dfour.io/europe">
        <v-img
          width="100%"
          :lazy-src="`${baseUrl}/${mainImageLazy}`"
          :src="`${baseUrl}/${mainImage}`"
        ></v-img>
      </a>
    </p>
    <p style="text-align:center;">
      <v-btn
        color="primary"
        large
        href="https://xmas.dfour.io/europe"
        >
        Start Mapping
      </v-btn>
    </p>
    <h2>The Goal</h2>
    <p>
      Map the temporary and create an overview of all Christmas Delights (food, drinks, decoration, events). Whether you are on your way as a tourist or a resident, stop for a second and tell the world about it.
    </p>
    <h2>The Challenge</h2>
    <p>
      The top contributors will be rewarded with a data towel of their city.
    </p>
    <h2>The Timing</h2>
    <p>
      Inputs: 6-24. December 2021<br>
      Results: January 2022
    </p>
    <h2>Sharing the Joy</h2>
    <p>
      Show your friends how you see Christmas!
    </p>
    <h2>The Team Behind</h2>
    <p>
      The project is initiated by <a href="https://www.cividi.ch/en/" target="_blank">cividi</a>, and run on <a href="https://www.dfour.space/en/" target="_blank">dføur</a>, the collaborative mapping platform.
    </p>
    <p>
      Contact: Viktoria Molnar, COO cividi GmbH, viktoria[et]cividi[dot]ch
    </p>
    <v-row>
      <v-col
        v-for="n in logos"
        :key="n"
        class="d-flex child-flex"
        cols="3"
      >
        <v-img
          :src="`${baseUrl}/${n}`"
          aspect-ratio="1"
          contain
          height="80px"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ParticipationLanding',

  props: [
    "baseUrl",
    "mainImage",
    "mainImageLazy",
    "logos",
    "startDate",
  ],
}
</script>

<style scoped>
div {
  text-align: left;
}
a {
  text-decoration: none;
  /* color: #fff;
  background-color: #543076;
  padding: 2px 4px; */
}
p {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
