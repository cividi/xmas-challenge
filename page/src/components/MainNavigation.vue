<template>
  <div>
    <v-app-bar app flat id="topbar">
      <router-link id="logo" :to="'/'" class="px-4 py-4 d-block">
        <img 
            alt="dføur logo"
            contain
            src="@/assets/logo.svg"
            height="36">
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <nav id="mainnav" class="d-none d-md-block">
        <router-link
          v-for="item in mainnav"
          :key="item.textKey"
          :to="'/' + item.route + '/'">{{ item.textKey }}</router-link>
      </nav>
      <v-app-bar-nav-icon @click="mobnav=!mobnav" class="d-md-none"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      right app dark color="primary" class="mobnav" v-model="mobnav" disable-resize-watcher>
      <v-toolbar flat color="primary" class="mx-2">
        <v-spacer></v-spacer>
        <v-btn icon large @click="mobnav=!mobnav">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="text-right mx-2">
        <!-- <language-switch expanded="1" /> -->
      </div>
      <v-list color="primary">
        <v-list-item
          v-for="item in mainnav" :key="item.textKey"
          :to="'/'  + item.route + '/'">
          <v-list-item-content>
            <v-list-item-title>{{ item.textKey }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-flex class="useractions d-sm-none center">
        <v-divider></v-divider>
        <!-- <user-actions vertical="1" /> -->
      </v-flex>
    </v-navigation-drawer>
  </div>
</template>

<style>
#mainnav a {
  color: #000;
  margin: 0 0.5em;
  font-size: 1em;
  text-decoration: none;
}

.v-application .mobnav a {
  color: #fff;
}
</style>

<script>
export default {
  name: 'MainNavigation',
  data() {
    return {
      mobnav: false,
      mainnav: [
        { route: '/imprint', textKey: 'Impressum' },
      ]
    };
  }
};
</script>
