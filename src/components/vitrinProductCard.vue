<template>
  <router-link
    :to="'/products/' + data.id"
    class="w-full h-[300px] rounded-lg border border-gray-300 p-2"
  >
    <div class="w-full flex items-center justify-center">
      <img
        v-if="data.img"
        :src="imgUrl"
        alt="Vitrin-product"
        class="min-w-[130px] min-h-[130px]"
      />
      <img
        v-else
        src="../assets/images/producterr.png"
        alt="product-image"
        class="min-w-[130px] min-h-[130px]"
      />
    </div>
    <div class="mt-4 border-t text-base border-gray-300 py-3">
      <h4 class="text-gray-600">{{ data.title }}</h4>
      <p class="w-full text-green-500 mt-4">
        {{ digitChanger(JSON.stringify(data.price)) }} تومان
      </p>
    </div>
  </router-link>
</template>

<script setup>
import { digitChanger } from "@/composables/digitChanger";

const props = defineProps({
  data: {
    type: Object,
    Required: true,
  },
});

const imgUrl = new URL(`../assets/images/${props.data.img}`, import.meta.url)
  .href;
</script>

<style scoped></style>
