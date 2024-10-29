<template>
  <header>
    <nav>
      <Header />
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer>footer</footer>
</template>

<script setup>
import Header from "./Header.vue";
</script>
