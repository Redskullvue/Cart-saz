<template>
  <div class="w-full">
    <div class="w-full rounded-lg border border-gray-300 py-4 px-2">
      <div class="w-full flex items-center justify-between">
        <p>نمایش تمام محصولات</p>
        <ToggleButton
          :state="showAllItems"
          @changeButtonState="showAllItemsInVitrin"
        />
      </div>
      <p class="text-gray-500 mt-2 text-sm">
        درصورت انتخا این گزینه تمام محصولات شما در ویترین قابل نمایش خواهند شد
      </p>
    </div>
    <div class="w-full mt-6">
      <input
        type="text"
        class="py-3 px-1 w-full rounded-lg border border-gray-300"
        placeholder="جستجو محصول"
      />
    </div>
    <div class="w-full mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <productCard
        v-for="(product, index) in store.shopOwnerInformation.products"
        :key="index"
        :data="product"
        :index="index"
        button="toggleButton"
      />
    </div>
  </div>
</template>

<script setup>
import ToggleButton from "@/components/ToggleButton.vue";
import productCard from "@/components/productCard.vue";
import { useCounterStore } from "@/stores/shoppers";
import { ref } from "vue";

const store = useCounterStore();

const showAllItems = ref(false);

const showAllItemsInVitrin = () => {
  showAllItems.value = !showAllItems.value;
  store.showAllProductsInVitrin(showAllItems.value);
};
</script>

<style scoped></style>
