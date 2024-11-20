<template>
  <div class="w-full">
    <div class="w-full flex items-center justify-center">
      <img :src="qrCodeUrl" alt="qr-code" />
    </div>
    <button
      class="bg-gray-200 rounded-lg py-3 px-1 w-full mt-6 flex items-center justify-center gap-2"
    >
      <Icon
        icon="material-symbols-light:print-outline"
        width="26"
        height="26"
        style="color: black"
      />
      برینت مسقیم
    </button>
    <button
      class="bg-blue-500 rounded-lg py-3 px-1 w-full mt-2 text-white flex items-center justify-center gap-2"
    >
      <Icon
        icon="tabler:download"
        width="26"
        height="26"
        style="color: white"
      />
      دانلود تصویر
    </button>

    <p class="mt-6 text-gray-600 font-extralight">
      این QR کد اختصاصی ویترین شماست که میتوانید آن را چاب کتید و آن را در مغازه
      یا فروشگاه خود درج کنید تا کاربران با اسکن این تصویر به ویترین شما بیایند
      و حصولات شما رو ببینند
    </p>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import QRCode from "qrcode";
import { useCounterStore } from "@/stores/shoppers";
const store = useCounterStore();

let qrCodeUrl = null;
var opts = {
  errorCorrectionLevel: "H",
  type: "image/jpeg",
  quality: 0.3,
  margin: 1,
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
};

QRCode.toDataURL(
  "https://cartsaz1.netlify.app/vitrin/" + store.shopOwnerInformation.shopId,
  opts,
  function (err, url) {
    if (err) throw err;
    qrCodeUrl = url;
  }
);
</script>

<style scoped></style>
