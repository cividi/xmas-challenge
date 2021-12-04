<template>
  <div style="margin-top: -80px;">
    <h1>The dføur Xmas Challenge 🎄</h1>
    <p>
      <a href="https://beteiligung.campusbochum.de/de/SDY4F/0N2AQB/">
        <v-img
          width="100%"
          :lazy-src="`${baseUrl}/${mainImageLazy}`"
          :src="`${baseUrl}/${mainImage}`"
        ></v-img>
      </a>
    </p>
    <p>
      <v-btn
        color="primary"
        large
        href="/europe"
        >
        Zur Karte
      </v-btn>
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
