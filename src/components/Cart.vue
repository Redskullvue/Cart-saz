<template>
  <router-link
    :to="'/dashboard/cart/' + data.id"
    class="w-full rounded-lg border border-gray-400 h-40"
  >
    <div class="w-full h-2/3 p-2 flex items-center justify-between">
      <div>
        <h2 class="font-semibold text-xl">{{ data.reciverName }}</h2>
        <p class="text-gray-400">ایجاد شده در تاریخ {{ data.date }}</p>
      </div>
      <div>
        <p>{{ digitChanger(JSON.stringify(data.sumProducts)) }} تومان</p>
        <div
          class="max-w-24 rounded-full text-center mt-3 bg-green-400 text-green-800 py-1"
          v-if="data.status === 'ready'"
        >
          آماده ارسال
        </div>
        <div
          class="max-w-24 rounded-full text-center mt-3 bg-yellow-400 text-yellow-800 py-1"
          v-if="data.status === 'waiting'"
        >
          در انتظار
        </div>
        <div
          class="max-w-24 rounded-full text-center mt-3 bg-red-400 text-red-800 py-1"
          v-if="data.status === 'canceled'"
        >
          لغو شده
        </div>
      </div>
    </div>
    <div
      class="w-full h-1/3 bg-gray-200 p-2 border-t border-gray-300 flex items-center gap-4 justify-end"
    >
      <template v-for="(item, index) in data.reciverProducts" :key="index">
        <img
          :src="imgUrl + '/' + item.img"
          v-if="item.img"
          alt="product"
          class="w-[33px] h-[33px]"
        />
        <img
          v-if="!item.img"
          src="../assets/images/producterr.png"
          alt="non-image-product"
          class="w-[33px] h-[33px]"
        />
      </template>
    </div>
  </router-link>
</template>

<script setup>
import { digitChanger } from "@/composables/digitChanger";
import { useCounterStore } from "@/stores/shoppers";
import { onMounted } from "vue";

const store = useCounterStore();

const props = defineProps({
  data: {
    type: {
      title: String,
      id: Number,
      price: String,
      date: String,
    },
    required: true,
  },
});

onMounted(() => {
  store.sumOfProducts(props.data.id);
});
const imgUrl = new URL("../assets/images/", import.meta.url).href;
</script>

<style scoped></style>
