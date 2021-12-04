import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/imprint/',
        name: 'imprint',
        component: () => import('@/views/Imprint.vue'),
      },
      {
        path: '/:city',
        name: 'city',
        meta: {
          layout: 'LayoutFullscreen'
        },
        component: () => import('@/views/City.vue'),
      },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
