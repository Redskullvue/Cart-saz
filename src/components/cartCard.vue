<template>
  <div
    class="w-full h-28 border border-gray-400 rounded-lg p-4 flex items-center justify-between my-4"
  >
    <div class="flex gap-4">
      <p class="flex items-center text-blue-500 text-xl">
        {{ digitChanger(JSON.stringify(index)) }}
      </p>
      <div>
        <h2 class="text-xl mb-1">
          {{ digitChanger(JSON.stringify(info.productNumber)) }} محصول
        </h2>
        <p class="text-gray-600">
          ایجاد شده در <span class="mx-2">{{ info.date }}</span>
        </p>
      </div>
    </div>
    <div>
      <p>
        {{ digitChanger(JSON.stringify(info.sumProducts))
        }}<span class="mx-1">تومان</span>
      </p>
      <!-- Label Will be dynamic -->
      <div
        class="max-w-24 rounded-full text-center mt-3 bg-green-400 text-green-800 py-1"
      >
        آماده ارسال
      </div>
    </div>
  </div>
</template>

<script setup>
import { digitChanger } from "@/composables/digitChanger";
const props = defineProps(["label", "info", "index"]);
</script>

<style scoped></style>
