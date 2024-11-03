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
          :value="user.name"
          class="border border-gray-500 rounded-lg py-2 px-1"
          @input="updateData($event, 'name')"
        />
        <h2 v-else class="md:text-xl">{{ user.name }}</h2>
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
          :value="user.tel"
          @input="updateData($event, 'tel')"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">{{ user.tel }}</h2>
      </div>
      <!-- Email -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">ایمیل</h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="user.email"
          @input="updateData($event, 'email')"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">{{ user.email }}</h2>
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
          :value="user.shopName"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">فروشگاه {{ user.shopName }}</h2>
      </div>
      <!-- shop's instagram -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">
          اینستاگرام فروشگاه
        </h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="user.instaLink"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">{{ user.instaLink }}</h2>
      </div>
      <!-- shop's activity -->
      <div>
        <h4 class="mb-4 text-sm md:text-base text-gray-600">حوزه فروشگاه</h4>
        <input
          type="text"
          v-if="isEditingMode"
          :value="user.activity"
          class="border border-gray-500 rounded-lg py-2 px-1"
        />
        <h2 v-else class="md:text-xl">{{ user.activity }}</h2>
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
import { ref } from "vue";

const isEditingMode = ref(false);

const user = ref({
  name: "احسان عزتی",
  tel: "۰۹۱۰۲۲۳۲۳۷۸",
  email: "pooyaworkjs@gmail.com",
  shopName: "هگزاگون",
  instaLink: "instagram.com/hexagon",
  activity: "مد و لباس",
});

const updateData = (e, section) => {
  if (section === "name") {
    user.value.name = e.target.value;
  } else if (section === "tel") {
    user.value.tel = e.target.value;
  } else if (section === "email") {
    user.value.email = e.target.value;
  }
};
</script>

<style scoped></style>
