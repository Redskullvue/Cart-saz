<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "./stores/shoppers";

const store = useCounterStore();

onMounted(() => {
  store.isUserAuthed = JSON.parse(localStorage.getItem("isAuthed"));
});
</script>

<style>
* {
  font-family: "morabba", sans-serif;
  direction: rtl;
}
</style>
