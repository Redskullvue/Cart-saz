<template>
  <div
    class="md:w-1/3 md:h-[400px] w-[90%] border border-dashed border-gray-400 flex items-center justify-center flex-col p-4 rounded-lg"
  >
    <img src="../assets/images/bag-logo.png" alt="bag-logo" class="mb-4" />
    <h3 class="mb-4 text-xl font-bold">{{ cardInfo.title }}</h3>
    <p class="text-gray-400 text-center text-lg">
      {{ cardInfo.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  cardInfo: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
