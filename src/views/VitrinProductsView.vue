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
    <div class="w-full mt-6 py-8 border-b border-gray-200">
      <input
        type="text"
        class="py-3 px-1 w-full rounded-lg border border-gray-300"
        @input="searchForProduct"
        placeholder="جستجو محصول"
      />
      <h2 class="mt-4">محصولات جستجو شده</h2>
      <div class="w-full mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <productCard
          v-for="(product, index) in searchedProducts"
          :key="index"
          :data="product"
          button="toggleButton"
        />
      </div>
      <h2 class="w-full text-center" v-if="searchedProducts.length < 1">
        محصولی یافت نشد
      </h2>
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
const searchedProducts = ref([]);

const showAllItemsInVitrin = () => {
  showAllItems.value = !showAllItems.value;
  store.showAllProductsInVitrin(showAllItems.value);
};

const searchForProduct = (e) => {
  searchedProducts.value = store.shopOwnerInformation.products.filter(
    (item) => {
      return item.title.includes(e.target.value);
    }
  );
  if (e.target.value === "") {
    searchedProducts.value = [];
  }
};
</script>

<style scoped></style>
