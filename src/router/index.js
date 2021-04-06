import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function lazyLoad(view) {
  return () =>
    import(
      /* webpackChunkName: "[request]" */ `@/views/${view}`
    );
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('home')
  },
  {
    path: '/poke/:id',
    name: 'PokeDetail',
    component: lazyLoad('poke/_id')
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
