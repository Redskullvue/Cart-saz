<template>
  <div class="w-full h-full mb-4">
    <div class="w-full border-b border-gray-300">
      <h2 class="text-4xl text-blue-500">
        فروشگاه {{ store.shopOwnerInformation.shopName }}
      </h2>
      <h4 class="text-gray-600 mt-2 mb-3">
        {{ store.shopOwnerInformation.name }} خوش آمدید
      </h4>
    </div>
    <div
      class="w-full flex flex-col md:flex-row justify-center mt-10 overflow-y-scroll"
    >
      <div class="w-full md:w-1/2 p-5">
        <h2 class="flex items-center gap-2 text-3xl">
          <Icon
            icon="ph:dot-fill"
            width="35"
            height="35"
            style="color: #5c61ff"
          />
          آخرین سبدهای خرید
        </h2>
        <template
          v-for="(cart, index) in store.shopOwnerInformation.createdCarts"
          :key="index"
        >
          <div class="mt-4">
            <cart-card
              v-if="index >= store.shopOwnerInformation.createdCarts.length - 3"
              :index="index + 1"
              :info="cart"
              :id="store.shopOwnerInformation.createdCarts[index].id"
            />
          </div>
        </template>
        <p
          class="w-full text-center mt-10"
          v-if="store.shopOwnerInformation.createdCarts.length < 1"
        >
          هیچ آیتمی برای نمایش وجود ندارد
        </p>
        <div class="w-full flex items-center justify-center mt-10">
          <router-link
            to="/dashboard/carts"
            class="rounded-full w-56 py-3 bg-gray-100 flex justify-center gap-2"
            v-if="carts.length > 0"
          >
            مشاهده همه
            <Icon
              icon="mingcute:arrow-left-line"
              width="23"
              height="23"
              style="color: black"
            />
          </router-link>
        </div>
      </div>

      <div class="w-full md:w-1/2 p-5">
        <h2 class="flex items-center gap-2 text-3xl mb-6">
          <Icon
            icon="ph:dot-fill"
            width="35"
            height="35"
            style="color: #5c61ff"
          />
          آخرین محصولات
        </h2>
        <template
          v-for="(product, index) in store.shopOwnerInformation.products"
          :key="index"
        >
          <div
            v-if="index <= 3"
            class="border border-gray-400 w-full py-6 px-3 my-4 rounded-lg flex justify-between items-center"
          >
            <h4 class="text-xl">{{ product.title }}</h4>
            <p>{{ digitChanger(JSON.stringify(product.price)) }} تومان</p>
          </div>
        </template>

        <div class="w-full flex items-center justify-center mt-10">
          <router-link
            to="/dashboard/products"
            class="rounded-full w-56 py-3 bg-gray-100 flex justify-center gap-2"
          >
            مشاهده همه
            <Icon
              icon="mingcute:arrow-left-line"
              width="23"
              height="23"
              style="color: black"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import cartCard from "@/components/cartCard.vue";
import { ref } from "vue";
import { dateCreator } from "@/composables/dateCreator";
import { useCounterStore } from "@/stores/shoppers";
import { digitChanger } from "@/composables/digitChanger";

const store = useCounterStore();

const carts = ref([
  {
    productNumber: 4,
    sumProducts: 400000,
    date: dateCreator(),
  },
  {
    productNumber: 2,
    sumProducts: 200000,
    date: dateCreator(),
  },
  {
    productNumber: 1,
    sumProducts: 500000,
    date: dateCreator(),
  },
]);
</script>

<style scoped>
::-webkit-scrollbar {
  width: 1px;
}
</style>
