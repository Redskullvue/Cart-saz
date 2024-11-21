<template>
  <div class="w-full">
    <header
      class="w-full bg-blue-500 h-48 rounded-b-xl p-4 flex gap-3 items-center text-white"
    >
      <div>
        <img :src="imgUrl" alt="vitrin-logo" />
      </div>
      <div>
        <h2 class="text-xl mb-3">فروشگاه کارتساز</h2>
        <p
          class="text-gray-300 text-sm"
          v-if="store.shopOwnerInformation.shopDescription"
        >
          {{ store.shopOwnerInformation.shopDescription }}
        </p>
      </div>
    </header>
    <div class="w-full flex items-center justify-center">
      <vitrinNavBar class="-mt-4" />
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import vitrinNavBar from "./vitrinNavBar.vue";
import { useCounterStore } from "@/stores/shoppers";

const store = useCounterStore();

const imgUrl = new URL(
  `../assets/images/${store.shopOwnerInformation.vitrinLogo}`,
  import.meta.url
).href;
</script>

<style scoped></style>
