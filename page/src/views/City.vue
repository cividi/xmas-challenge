<template>
    <div width="100%" style="height:100vh">
        <iframe 
            :src="iframeSrc"
            frameborder=0
            width="100%"
            style="height:100vh;overflow:hidden;"
            allow="geolocation">
        </iframe>
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
          dfourHub: process.env.VUE_APP_DFOUR_HUB,
          workspaceHash: process.env.VUE_APP_DFOUR_WORKSPACE_HASH,
          mapping: {
              "europe":"VAXPHU",
              "zurich":"VWP496",
              "budapest":"CH620M",
              "hamburg":"XPW22D",
              "aachen":"WOPTH9",
              "berlin":"H3UGV0"
          },
      }
  },

  computed: {
      iframeSrc: function () {
          return `${this.dfourHub}/${this.workspaceHash}/${this.mapping[this.$route.params.city]}/`
      }
  }
};
</script>
