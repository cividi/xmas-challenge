<template>
    <div width="100%" style="height:100vh">
        <iframe :src="iframeSrc" frameborder=0 width="100%" style="height:100vh" allow="geolocation"></iframe>
    </div>
</template>

<style scoped>
.introtxt {
    max-width: 660px;
}
</style>

<script>
export default {
  name: 'City',

  data() {
      return {
          mapping: {
              "europe":"VAXPHU",
              "zurich":"VWP496",
              "budapest":"CH620M",
              "hamburg":"XPW22D",
              "aachen":"WOPTH9"
          },
      }
  },

  computed: {
      iframeSrc: function () {
          return `https://parti.dfour.io/SFSOL/${this.mapping[this.$route.params.city]}/`
      }
  }
};
</script>
