<template>
  <div
    class="w-full h-[90px] flex items-center justify-between rounded-lg border border-gray-400 py-4 px-2"
  >
    <div class="flex items-center gap-3">
      <!-- <img src="../assets/images/product1.png" alt="product-image" /> -->
      <img v-if="data.img" :src="imgUrl" :alt="data.title" />
      <img v-else src="../assets/images/producterr.png" alt="product-image" />
      <div>
        <h2 class="text-xl font-bold">{{ data.title }}</h2>
        <p class="text-gray-600 mt-1">
          قیمت واحد :{{ digitChanger(JSON.stringify(data.price)) }} نومان
        </p>
      </div>
    </div>
    <div>
      <Icon
        icon="iconamoon:trash-thin"
        v-if="button === 'delete'"
        width="30"
        height="30"
        class="text-gray-500 transition-colors duration-300 hover:text-red-500 cursor-pointer"
        @click="$emit('deleteItem', index)"
      />
      <ToggleButton
        v-if="button === 'toggleButton'"
        :state="data.isShownVitrin"
        @changeButtonState="showInVitrin"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import ToggleButton from "./ToggleButton.vue";
import { digitChanger } from "@/composables/digitChanger";
import { useCounterStore } from "@/stores/shoppers";

const store = useCounterStore();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  button: {
    type: String,
    required: false,
    default: "delete",
  },
  index: {
    type: Number,
    required: true,
  },
});

const showInVitrin = (e) => {
  store.showProductInVitrin(e, props.index);
};

const imgUrl = new URL(`../assets/images/${props.data.img}`, import.meta.url)
  .href;
</script>

<style scoped></style>
