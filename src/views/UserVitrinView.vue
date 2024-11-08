<template>
  <div class="w-full">
    <div class="w-full grid grid-cols-2 md:grid-cols-6 mt-6 p-4 gap-4">
      <vitrinProductCard v-for="i in 12" :key="i" />
    </div>
  </div>
</template>

<script setup>
import vitrinProductCard from "@/components/vitrinProductCard.vue";
</script>

<style scoped></style>
