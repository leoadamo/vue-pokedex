<template>
  <div class="container t-home">
    <router-link
      :to="{ name: 'PokeDetail', params: { id: 6 } }"
      title="Go to the Pokemon detail"
    >
      Go to the Poke Details
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
