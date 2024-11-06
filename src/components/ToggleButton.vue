<template>
  <div>
    <div
      @click="toggle = !toggle"
      class="rounded-full w-14 h-7 p-1 flex flex-row-reverse items-center justify-between cursor-pointer"
      :class="toggle ? 'bg-blue-600' : 'bg-gray-300'"
    >
      <div
        class="w-6 h-6 rounded-full border bg-white transition-all duration-300"
        :class="toggle ? ' translate-x-6' : ''"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toggle = ref(true);
</script>
