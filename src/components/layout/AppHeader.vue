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

      <nav
        class="app-nav"
        :class="{ 'app-nav--active': isMenuOpen }"
      >
        <ul class="app-nav__list">
          <li class="app-nav__item">
            <a class="link link--tp1" href="#">Github</a>
          </li>
          <li class="app-nav__item">
            <a class="link link--tp1" href="#">LinkedIn</a>
          </li>
        </ul>
      </nav>

      <button
        class="app-header__hamburguer"
        @click="toggleMenu"
      >
        <span :class="{ 'is-active': isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['toggleMenu'])
  },
  computed: {
    ...mapGetters(['isMenuOpen'])
  }
};
</script>
