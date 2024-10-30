<template>
  <header>
    <nav>
      <Header />
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
