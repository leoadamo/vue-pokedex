<template>
  <header class="t-the-header">
    <div class="container">
      <router-link
        :to="{ name: 'Home' }"
        title="Vue Pokédex"
        class="t-the-header__logo"
      >
        <img
          src="@/assets/images/poke-logo.svg"
          title="Pokémon logo"
          alt="Pokémon logo"
        />
      </router-link>

      <nav
        class="app-nav"
        :class="{ 'app-nav--active': isMenuOpen }"
      >
        <ul class="app-nav__list">
          <li class="app-nav__item">
            <a
              class="link link--tp1"
              href="https://github.com/leoadamo"
              title="View my Github"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li class="app-nav__item">
            <a
              class="link link--tp1"
              href="https://www.linkedin.com/in/leosadamo/"
              title="View my LinkedIn"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="t-the-header__hamburguer"
        title="Menu Hamburguer Toggler"
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
  name: 'TheHeader',
  methods: {
    ...mapActions(['toggleMenu'])
  },
  computed: {
    ...mapGetters(['isMenuOpen'])
  }
};
</script>
