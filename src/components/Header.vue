<template>
  <header>
    <div class="logo">
      <h1><span>Poke</span><span>Vue</span><span>Dex</span></h1>
    </div>

    <nav class="nav">
      <ul>
        <a href="">
          <li>Página inicial</li>
        </a>
        <a href="">
          <li>Pokémon aleatório</li>
        </a>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 1px 1px 10px rgba(50, 0, 0, 0.3);
}

.logo {
  span {
    &:first-of-type {
      color: #ff0000;
    }

    &:nth-child(2) {
      color: #3eaf7c;
    }
  }
}
.nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    li {
      list-style-type: none;

      &:last-of-type {
        margin-right: 20px;
      }
    }

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: #ff0000;
      }
    }
  }
}
</style>
