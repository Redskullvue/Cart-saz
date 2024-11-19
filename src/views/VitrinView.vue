<template>
  <div class="w-full">
    <div class="w-full flex items-center justify-center">
      <img src="../assets/images/vitrin.jpg" alt="Vitrin" />
    </div>
    <h2 class="w-full text-center text-lg text-gray-500 mt-4">
      آدرس مستقیم ویترین شما در کارت ساز
    </h2>
    <div class="w-full text-center border border-gray-200 rounded-lg mt-6">
      <div class="mt-4">
        <a href="#" class="text-blue-500 underline underline-offset-4">
          https://Cartsaz.ir/vitrins/{{ store.shopOwnerInformation.shopId }}
        </a>
      </div>

      <button
        class="w-full bg-gray-200 flex items-center justify-center py-3 rounded-b-lg mt-4"
        @click="copyLink"
      >
        <Icon
          icon="solar:copy-linear"
          width="23"
          height="23"
          style="color: black"
        />
        کبی لینک ویترین
      </button>
    </div>
    <ul class="w-full mt-10 mb-12">
      <li>
        <router-link
          class="flex items-center justify-between border-b border-gray-200 py-4"
          to="/dashboard/vitrin/products"
        >
          <div class="flex gap-2">
            <Icon icon="tabler:cube" width="23" height="23" />
            <p>محصولات ویترین</p>
          </div>
          <div class="flex gap-x-3">
            <p class="font-light text-green-500">
              {{
                digitChanger(
                  JSON.stringify(store.shopOwnerInformation.products.length)
                )
              }}
            </p>
            <Icon
              icon="mi:chevron-left"
              width="23"
              height="23"
              style="color: black"
            />
          </div>
        </router-link>
      </li>
      <li>
        <router-link
          to="/dashboard/vitrin/contact"
          class="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <div class="flex gap-2">
            <Icon
              icon="solar:phone-bold"
              width="23"
              height="23"
              style="color: black"
            />
            <p>اطلاعات تماس</p>
          </div>
          <div class="flex gap-x-3">
            <p class="font-light text-green-500">فعال</p>
            <Icon
              icon="mi:chevron-left"
              width="23"
              height="23"
              style="color: black"
            />
          </div>
        </router-link>
      </li>
      <li>
        <router-link
          to="/dashboard/vitrin/setting"
          class="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <div class="flex gap-2">
            <Icon icon="solar:shop-broken" width="23" height="23" />
            <p>تنظیمات کلی ویترین</p>
          </div>
          <div>
            <Icon
              icon="mi:chevron-left"
              width="23"
              height="23"
              style="color: black"
            />
          </div>
        </router-link>
      </li>
      <li>
        <router-link
          to="/dashboard/vitrin/qrcode"
          class="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <div class="flex gap-2">
            <Icon
              icon="ic:round-qr-code"
              width="23"
              height="23"
              style="color: black"
            />
            <p>دریافت Qr Code</p>
          </div>
          <div>
            <Icon
              icon="mi:chevron-left"
              width="23"
              height="23"
              style="color: black"
            />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useCounterStore } from "@/stores/shoppers";
import { useToast } from "vue-toastification";
import { digitChanger } from "@/composables/digitChanger";

const store = useCounterStore();
const toast = useToast();

const copyLink = () => {
  navigator.clipboard.writeText(
    `https://Cartsaz.ir/vitrins/${store.shopOwnerInformation.shopId}`
  );
  toast.success("لینک کپی شد");
};
</script>

<style scoped></style>
