<template>
  <div style="margin-top: -180px;">
    <h2>Welcome to the dføur Xmas Mapping Challenge 2021!</h2>
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
        color="#A13B3E"
        dark large
        href="https://xmas.dfour.io/europe"
        >
        Start Mapping
      </v-btn>
    </p>
    <h3>The Goal</h3>
    <p>
      Map the temporary and create an overview of all Christmas Delights (food, drinks, decoration, events). Whether you are on your way as a tourist or a resident, stop for a second and tell the world about it.
    </p>
    <h3>The Challenge</h3>
    <p>
      <ul>
        <li>Is open for anyone: locals & tourist, all across the world.</li>
        <li>No expertise required</li>
        <li>Minimum data collection, not stored beyond the campaign</li>
        <li>Cities with multiple entries: easier access via the left panel city list</li>
        <li>The top contributors will be rewarded with a <a href="https://drive.google.com/file/d/1Hzep9f5vFaY65DqOXQcVIQnrTq1CJSA2/view?usp=sharing" target="_blank">data towel</a> of their city</li>
      </ul>
    </p>
    <h3>The Timing</h3>
    <p>
      Inputs: 6-24. December 2021<br>
      Results: January 2022
    </p>
    <h3>Sharing the Joy</h3>
    <p>
      Show with your friends how you experience the holiday season!
    </p>
    <h3>The Team Behind</h3>
    <p>
      The project is initiated by <a href="https://www.cividi.ch/en/" target="_blank">cividi</a>, and run on <a href="https://www.dfour.space/en/" target="_blank">dføur</a>, the collaborative mapping platform.
    </p>
    <p>
      Contact: Viktoria Molnar, COO cividi GmbH, viktoria [at] cividi [dot] ch
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
  color: #A13B3E;
  font-weight: bold;
  /* color: #fff;
  background-color: #543076;
  padding: 2px 4px; */
}
h2 {
  padding-bottom: 20px;
}
h3 {
  color: #1F5521;
}
p {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
