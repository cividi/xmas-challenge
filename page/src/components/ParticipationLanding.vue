<template>
  <div style="margin-top: -180px;">
    <h2 style="text-align: center;">Welcome to the dføur Xmas Mapping Challenge 2021!</h2>
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
        href="https://xmas.dfour.io/world"
        >
        Start Mapping
      </v-btn>
    </p>
    <h3>The Goal</h3>
    <p>
      <ul>
        <li>Mapping the temporary & discovering all Xmas-related things around</li>
        <li>Comparing food & drink (esp. mulled wine) prices across Europe</li>
        <li>Having fun, getting your daily walk while being part of something bigger</li>
        <li>Winning a data towel</li>
      </ul>
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
    <p style="text-align: center;">
      <a href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Emention%7Ctwgr%5Ecividitech&related=cividitech%2Cdfourtech&text=Join%20the%20holiday%20mapping%20at%20xmas.dfour.io." target="_blank" class="twitter-mention-button" data-text="Join the holiday mapping at xmas.dfour.io." data-related="cividitech,dfourtech" data-show-count="false">
        <v-btn
          class="mx-1"
          dark
          small
          color="#A13B3E"
        >
          <v-icon dark>
            mdi-twitter
          </v-icon>
        </v-btn>
      </a>
      <a href="#" 
        onclick="
          window.open(
            'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
            'facebook-share-dialog', 
            'width=626,height=436'); 
          return false;">
        <v-btn
          class="mx-1"
          dark
          small
          color="#A13B3E"
        >
          <v-icon dark>
            mdi-facebook
          </v-icon>
        </v-btn>
      </a>
      <a href="https://www.linkedin.com/shareArticle?url=xmas.dfour.io&title=Join%20the%20holiday%20mapping%20at%20xmas.dfour.io." target="_blank" rel="nofollow noopener">
        <v-btn
          class="mx-1"
          dark
          small
          color="#A13B3E"
        >
          <v-icon dark>
            mdi-linkedin
          </v-icon>
        </v-btn>
      </a>
      <a href="whatsapp://send?text=xmas.dfour.io" target="_blank" rel="nofollow noopener">
        <v-btn
          class="mx-1"
          dark
          small
          color="#A13B3E"
        >
          <v-icon dark>
            mdi-whatsapp
          </v-icon>
        </v-btn>
      </a>
      <a href="mailto:subject=Join%20the%20holiday%20mapping%20at%20xmas.dfour.io" target="_blank" rel="nofollow noopener">
        <v-btn
          class="mx-1"
          dark
          small
          color="#A13B3E"
        >
          <v-icon dark>
            mdi-email
          </v-icon>
        </v-btn>
      </a>
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
