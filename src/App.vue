<template>
  <div id="app">
    <the-header />
    <div class="l-container">
      <router-view />
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/04-Templates/TheHeader';
import TheFooter from '@/components/04-Templates/TheFooter';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
