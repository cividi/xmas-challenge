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
              "world":"VAXPHU",
              "europe":"VAXPHU",
              "zurich":"VWP496",
              "budapest":"CH620M",
              "hamburg":"XPW22D",
              "aachen":"WOPTH9",
              "berlin":"H3UGV0",
              "eger":"4M11GL",
              "gothenburg":"9P704J",
              "konstanz":"EN8G29",
              "luzern":"VM0VKE",
              "london":"YH205J",
              "basel":"T6C66Z",
              "bellinzona":"HFVEOT",
              "bern":"G15SBB",
              "montreux":"15ZCIQ",
              "stockholm":"TN0WCC",
              "stgallen":"DORZQ6"
          },
      }
  },

  computed: {
      utms: function () {
        var query = this.$route.query
        return Object.keys(query)
          .filter( key => key.startsWith("utm") )
          .reduce( (res, key) => (res[key] = query[key], res), {} );
      },
      iframeSrc: function () {
        var snapshotHash = this.mapping.world
        if(Object.keys(this.mapping).includes(this.$route.params.city))
            snapshotHash = this.mapping[this.$route.params.city]
        var url = `${this.dfourHub}/${this.workspaceHash}/${snapshotHash}/`
        if(Object.entries(this.utms).length > 0) {
            const utms = Object.entries(this.utms).map(([k,v]) => `${k}=${v}`).join('&');
            url = `${url}?${utms}`
        }
        return url
      }
  },
};
</script>
