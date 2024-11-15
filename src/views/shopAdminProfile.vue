<template>
  <div class="w-full">
    <div
      class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b border-gray-300"
    >
      <!-- Name -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">نام شما</h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="store.shopOwnerInformation.name"
          class="border border-gray-500 rounded-lg py-2 px-1"
          @input="updateData($event, 'name')"
        />
        <h2 v-else class="md:text-xl">{{ store.shopOwnerInformation.name }}</h2>
      </div>

      <button
        class="w-32 absolute py-2 text-sm rounded-lg text-white bg-black left-4 mb-10"
        @click="isEditingMode = !isEditingMode"
      >
        <p v-if="isEditingMode">ثبت اطلاعات</p>
        <p v-else>ویرایش اطلاعات</p>
      </button>
      <!-- Phone number -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">شماره تماس</h4>
        <input
          type="tel"
          v-if="isEditingMode"
          :value="store.shopOwnerInformation.shopPhone"
          @input="updateData($event, 'tel')"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">
          {{ store.shopOwnerInformation.shopPhone }}
        </h2>
      </div>
      <!-- Email -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">ایمیل</h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="store.shopOwnerInformation.eMail"
          @input="updateData($event, 'email')"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">
          {{ store.shopOwnerInformation.eMail }}
        </h2>
      </div>
    </div>

    <div
      class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b border-gray-300"
    >
      <!-- shop name -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">نام فروشگاه</h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="store.shopOwnerInformation.shopName"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">
          فروشگاه {{ store.shopOwnerInformation.shopName }}
        </h2>
      </div>
      <!-- shop's instagram -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">
          اینستاگرام فروشگاه
        </h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="store.shopOwnerInformation.shopId"
          @input="updateData($event, 'shopId')"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">
          {{ store.shopOwnerInformation.shopId }}
        </h2>
      </div>
      <!-- shop's activity -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">حوزه فروشگاه</h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="store.shopOwnerInformation.shopCategory"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">
          {{ store.shopOwnerInformation.shopCategory }}
        </h2>
      </div>
    </div>

    <div
      class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b border-gray-300 mb-4"
    >
      <!-- shop name -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">آدرس فرستنده</h4>
        <h2 class="md:text-xl">----</h2>
      </div>
      <!-- shop's instagram -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">
          کد ارسال فرستنده
        </h4>
        <h2 class="md:text-xl">----</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCounterStore } from "@/stores/shoppers";
import { useToast } from "vue-toastification";

const store = useCounterStore();
const toast = useToast();
const isEditingMode = ref(false);

const updateData = (e, section) => {
  if (section === "name") {
    store.shopOwnerInformation.name = e.target.value;
    store.authUser();
  } else if (section === "tel") {
    store.shopOwnerInformation.shopPhone = e.target.value;
    store.authUser();
  } else if (section === "email") {
    store.shopOwnerInformation.eMail = e.target.value;
    store.authUser();
  } else if (section === "shopId") {
    store.shopOwnerInformation.shopId = e.target.value;
    store.authUser();
  }
};

watch(isEditingMode, (newVal) => {
  if (newVal === false) {
    toast.success("تغییرات ذخیره شد");
  }
});
</script>

<style scoped></style>
