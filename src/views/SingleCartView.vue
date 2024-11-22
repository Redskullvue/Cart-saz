<template>
  <div class="w-full">
    <div class="w-full p-4 border-b border-gray-300">
      <h2 class="w-full text-lg">مشخصات گیرنده</h2>
      <!-- Row 1 -->
      <div class="w-full flex justify-between items-center my-6">
        <div class="w-1/2">
          <small class="text-gray-500">نام گیرنده</small>
          <p class="mt-2">
            {{
              store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
                .reciverName
            }}
          </p>
        </div>
        <div class="w-1/2">
          <small class="text-gray-500">شماره گیرنده</small>
          <p class="mt-2">
            {{
              store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
                .reciverNumber
            }}
          </p>
        </div>
      </div>
      <!-- Row 2 -->
      <div class="w-full my-6">
        <small class="text-gray-500">آدرس گیرنده</small>
        <p class="mt-2">
          {{
            store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
              .reciverAddress
          }}
        </p>
      </div>
      <!-- Row 3 -->
      <div class="w-full my-6">
        <small class="text-gray-500">کدبستی</small>
        <p class="mt-2">
          {{
            store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
              .reciverPostalCode
          }}
        </p>
      </div>
      <!-- Row 4 -->
      <div class="w-full my-6">
        <small class="text-gray-500">توضیحات</small>
        <p class="mt-2">
          {{
            store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
              .reciverNotes
          }}
        </p>
      </div>
      <!-- Row-5 -->
      <div class="w-full flex items-center justify-center">
        <button
          class="bg-gray-200 rounded-lg py-3 px-1 w-full flex gap-2 items-center justify-center"
        >
          <Icon
            icon="el:download"
            width="20"
            height="20"
            style="color: black"
          />
          دانلود برگه ارسال سفارش
        </button>
      </div>
    </div>
    <!-- Selected Products -->
    <div class="w-full mb-6">
      <h2 class="w-full">محصولات</h2>
      <div class="w-full mt-6">
        <template
          v-for="(product, index) in store.shopOwnerInformation.createdCarts[
            route.params.cartid - 1
          ].reciverProducts"
          :key="index"
        >
          <productCard
            v-if="
              store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
                .reciverProducts.length > 1
            "
            :data="product"
            :index="index"
            class="my-4"
          />
        </template>
        <p
          v-if="
            store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
              .reciverProducts.length === 0
          "
          class="w-full flex items-center justify-center text-gray-600"
        >
          هیچ محصولی برای نمایش وجود ندارد
        </p>
      </div>
    </div>
    <!-- Full Payed Price For Cart -->
    <div class="w-full flex items-center justify-between mb-6">
      <div class="text-gray-500">مبلغ کل :‌</div>
      <div>
        {{
          digitChanger(
            JSON.stringify(
              store.shopOwnerInformation.createdCarts[route.params.cartid - 1]
                .sumProducts
            )
          )
        }}
        تومان
      </div>
    </div>
    <!-- Buttons Section -->
    <div class="w-full mb-12 flex items-center justify-between gap-4">
      <button
        @click="doneCartStatus('canceled', route.params.cartid)"
        class="text-red-600 flex items-center justify-center gap-2 bg-red-100 rounded-lg py-3 w-1/2 transition-colors duration-300 hover:bg-red-200"
      >
        <Icon
          icon="healthicons:no-outline"
          width="23"
          height="23"
          class="text-red-600"
        />
        لغو کامل
      </button>
      <button
        @click="doneCartStatus('ready', route.params.cartid)"
        class="text-white bg-blue-500 rounded-lg py-3 w-1/2 flex gap-2 items-center justify-center transition-colors duration-300 hover:bg-blue-600"
      >
        <Icon
          icon="teenyicons:tick-circle-outline"
          width="20"
          height="20"
          style="color: white"
        />
        انجام سفارش
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { useCounterStore } from "@/stores/shoppers";
import productCard from "@/components/productCard.vue";
import { useRoute } from "vue-router";
import { digitChanger } from "@/composables/digitChanger";
import { useToast } from "vue-toastification";

const toast = useToast();
const store = useCounterStore();

const route = useRoute();

onMounted(() => {
  store.sumOfProducts(route.params.cartid);
});

const doneCartStatus = (status, index) => {
  if (status === "ready") {
    toast.success("سبد خرید آماده ارسال شد");
  } else if (status === "canceled") {
    toast.error("سبد خرید لغو شد");
  }
  store.changeCartStatus(status, index);
};
</script>

<style scoped></style>
