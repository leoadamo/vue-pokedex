<template>
  <header class="t-the-header">
    <div class="l-container">
      <!-- Poké Logo -->
      <router-link
        :to="{ name: 'Home' }"
        title="Vue Pokédex"
        class="t-the-header__logo"
      >
        <img
          src="@/assets/images/poke-logo.svg"
          title="Pokémon logo"
          alt="Pokémon brand logo"
        />
      </router-link>
      <!-- End of Poké Logo -->

      <!-- Navigation -->
      <nav
        class="app-nav"
        :class="{ 'app-nav--active': isMenuOpen }"
      >
        <ul class="app-nav__list">
          <li
            v-for="(link, index) in navigation.links"
            :key="index"
            class="app-nav__item"
          >
            <a
              class="link link--tp1"
              :href="link.url"
              :title="`View my ${link.title}`"
              target="_blank"
            >
              {{ link.title }}
            </a>
          </li>
        </ul>
      </nav>
      <!-- End of Navigation -->

      <!-- Hamburger -->
      <button
        class="t-the-header__hamburguer"
        title="Menu Hamburguer Toggler"
        @click="toggleMenu"
      >
        <span :class="{ 'is-active': isMenuOpen }"></span>
      </button>
      <!-- End of Hamburger -->
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TheHeader',
  data() {
    return {
      navigation: {
        links: [
          {
            title: 'Github',
            url: 'https://github.com/leoadamo'
          },
          {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/leosadamo/'
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(['toggleMenu'])
  },
  computed: {
    ...mapGetters(['isMenuOpen'])
  }
};
</script>
