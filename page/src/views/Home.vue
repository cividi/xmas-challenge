<template>
    <div>
        <v-container my-12 >
            <v-row justify="center" >
                <v-col class="introtxt text-center pt-12">
                    <div class="introtxt text-center pt-12 col" lang="de">
                        <ParticipationLanding
                            baseUrl="https://parti-dfour.eu-central-1.linodeobjects.com/web/xmas"
                            :logos="logos"
                            mainImage="xmasmap-intro-1024.png"
                            mainImageLazy="xmasmap-intro.png"
                            startDate="6. Dezember"
                        />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.introtxt {
    max-width: 660px;
}
</style>

<script>
import ParticipationLanding from '../components/ParticipationLanding.vue';

export default {
  name: 'Home',

  components: { ParticipationLanding },

  data() {
      return {
          logos: [],
      }
  }
};
</script>
