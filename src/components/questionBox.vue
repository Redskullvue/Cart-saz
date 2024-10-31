<template>
  <div
    class="w-full md:w-2/3 rounded-lg p-6 border border-gray-500 flex flex-col transition-all duration-500 cursor-pointer"
    @click="$emit('openAnswer', index)"
    :class="information.isOpen ? ' h-72' : ' h-24 md:h-20'"
  >
    <div class="w-full flex justify-between items-center">
      <div class="flex gap-4 items-center text-lg md:text-2xl">
        <Icon
          icon="ph:dot-fill"
          width="35"
          height="35"
          style="color: #5c61ff"
        />
        {{ information.title }}
      </div>
      <div>
        <Icon
          icon="ri:arrow-drop-down-line"
          width="43"
          height="43"
          style="color: black"
          :class="information.isOpen ? ' rotate-180' : ''"
          class="transition-all duration-300"
        />
      </div>
    </div>

    <!-- Information -->
    <div v-if="information.isOpen" class="w-full p-10 text-gray-700 text-lg">
      {{ information.info }}
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  information: {
    title: String,
    info: String,
    isOpen: Boolean,
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped></style>
