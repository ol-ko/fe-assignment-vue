<template>
  <div id="app">
    <nav>
      <router-link to="/">Properties for rent</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'assets/variables.scss';

body {
  font-family: Helvetica;
  margin: 0;
  padding: 0 2rem;
}

nav {
  padding: 2rem;
  margin: 0 -2rem;
  border-bottom: 2px solid $color-grey;
}

nav a {
  font-size: 2rem;
  font-weight: bold;
}

a {
  color: $color-primary;
}
</style>
