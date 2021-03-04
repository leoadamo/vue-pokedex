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
import AppHeader from '@/components/templates/AppHeader';
import AppFooter from '@/components/templates/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
