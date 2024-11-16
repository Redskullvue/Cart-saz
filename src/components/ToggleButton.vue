<template>
  <div>
    <div
      @click="$emit('changeButtonState', !state)"
      class="rounded-full w-14 h-7 p-1 flex flex-row-reverse items-center justify-between cursor-pointer"
      :class="state ? 'bg-blue-600' : 'bg-gray-300'"
    >
      <div
        class="w-6 h-6 rounded-full border bg-white transition-all duration-300"
        :class="state ? ' translate-x-6' : ''"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  state: {
    type: Boolean,
    // required: true,
  },
});
</script>
