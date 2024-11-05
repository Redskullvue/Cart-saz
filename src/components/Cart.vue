<template>
  <router-link
    :to="'/dashboard/cart/' + data.id"
    class="w-full rounded-lg border border-gray-400 h-40"
  >
    <div class="w-full h-2/3 p-2 flex items-center justify-between">
      <div>
        <h2 class="font-semibold text-xl">{{ data.title }}</h2>
        <p class="text-gray-400">ایجاد شده در تاریخ {{ data.date }}</p>
      </div>
      <div>
        <p>{{ data.price }} تومان</p>
        <div
          class="max-w-24 rounded-full text-center mt-3 bg-green-400 text-green-800 py-1"
        >
          آماده ارسال
        </div>
      </div>
    </div>
    <div
      class="w-full h-1/3 bg-gray-200 p-2 border-t border-gray-300 flex items-center gap-4 justify-end"
    >
      <img
        src="../assets/images/product1.png"
        alt="product"
        class="w-[33px] h-[33px]"
      />
      <img
        src="../assets/images/product2.png"
        alt="prodcut"
        class="w-[33px] h-[33px]"
      />
      <img
        src="../assets/images/product3.png"
        alt="product"
        class="w-[33px] h-[33px]"
      />
    </div>
  </router-link>
</template>

<script setup>
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
</script>

<style scoped></style>
