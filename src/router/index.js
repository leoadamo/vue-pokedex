import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function lazyLoad(view) {
  return () => import(`@/views/${view}`);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('Home')
  },
  {
    path: '/poke-detail',
    name: 'PokeDetail',
    component: lazyLoad('PokeDetail')
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
