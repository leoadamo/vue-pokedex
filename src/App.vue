<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <p>Content Goes Here...</p>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
