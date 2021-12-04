<template>
  <main>
    <MainNavigation />
    <v-main>
        <v-slide-y-transition mode="out-in">
            <slot />
        </v-slide-y-transition>
    </v-main>
  </main>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
  name: "LayoutDefault",
  components: {
    MainNavigation
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>