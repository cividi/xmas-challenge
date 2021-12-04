<template>
  <v-app>
      <v-main>
        <Layout>
          <router-view :key="$route.fullPath" />
        </Layout>
      </v-main>
  </v-app>
</template>

<style>
#app {
  background: #fff;
}
#topbar {
  border-bottom: 1px solid #e4e4e4;
}
</style>

<script>
export default {
  name: 'App',

  data() {
    return {
      fathomSiteId: process.env.VUE_APP_FATHOM_SITEID,
      fathomUrl: process.env.VUE_APP_FATHOM_URL || 'cdn.usefathom.com',
      fathomExclude: process.env.VUE_APP_FATHOM_EXCLUDE || ''
    };
  },

  mounted() {
    if (this.fathomSiteId !== '') {
      const fathomScript = document.createElement('script');
      fathomScript.setAttribute('src', `https://${this.fathomUrl}/script.js`);
      fathomScript.setAttribute('spa', 'auto');
      fathomScript.setAttribute('data-site', this.fathomSiteId);
      fathomScript.setAttribute('exluded-domains', `localhost,${this.fathomExclude}`);
      fathomScript.setAttribute('defer', true);
      document.head.appendChild(fathomScript);
    }
  },

};
</script>
