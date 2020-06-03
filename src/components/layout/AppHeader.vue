<template>
  <header class="app-header">
    <div class="container">
      <router-link
        :to="{ name: 'Home' }"
        class="app-header__logo"
      >
        <img
          src="@/assets/images/poke-logo.svg"
          alt="Pokémon logo"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>
