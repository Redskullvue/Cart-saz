<template>
  <div class="w-full">
    <div
      class="w-full h-full grid md:grid-cols-2 grid-cols-1 md:gap-6 items-center justify-center"
    >
      <div class="flex flex-col">
        <div for="">*عنوان محصول</div>
        <input
          type="text"
          placeholder="لباس مردانه"
          v-model="newProduct.title"
          class="border border-gray-400 rounded-lg py-3 my-4 px-1"
        />
      </div>
      <div class="flex flex-col">
        <div for="">قیمت</div>
        <div
          class="w-full border flex border-gray-400 rounded-lg py-3 my-4 px-1"
        >
          <input
            type="number"
            placeholder="۳۰.۰۰۰"
            v-model="newProduct.price"
            class="w-11/12 focus:outline-none"
          />
          <span class="text-gray-500 font-light"> تومان</span>
        </div>
      </div>
      <div class="flex flex-col">
        <div for="">کد محصول</div>
        <input
          type="text"
          placeholder="با توجه به نیاز خود"
          v-model="newProduct.productCode"
          class="border border-gray-400 rounded-lg py-3 my-4 px-1"
        />
      </div>
      <div class="flex flex-col">
        <div for="">دسته بندی</div>
        <!-- <input
          type="text"
          placeholder="اکسسوری"
          v-model="newProduct.category"
          class="border border-gray-400 rounded-lg py-3 my-4 px-1"
        /> -->
        <select
          class="border border-gray-400 rounded-lg py-3 my-4 px-1 bg-white"
          @change="setProductCategory"
        >
          <option :value="null">انتخاب کنید</option>
          <option
            v-for="(category, index) in store.shopCategories"
            :value="category"
            :key="index"
          >
            {{ category }}
          </option>
        </select>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="flex flex-col">
        <div for="">توضیحات</div>
        <input
          v-model="newProduct.productInfo"
          class="border border-gray-400 rounded-lg py-3 h-[130px] my-4 px-1"
        />
      </div>
      <div
        class="border w-full border-gray-400 rounded-lg py-3 px-1 self-center my-6 md:mt-10 mb-4 max-h-[50px] flex justify-between"
      >
        <p class="text-gray-500 font-light">نمایش در ویترین</p>
        <ToggleButton
          :state="newProduct.showVitrin"
          @changeButtonState="changeState"
        />
      </div>
      <!-- Upload Pictures -->
      <div class="w-full flex gap-2">
        <div
          class="w-1/2 md:w-1/3 cursor-pointer h-[200px] rounded-lg border border-blue-600 flex items-center justify-center mb-10 text-blue-800 bg-blue-300"
        >
          <Icon icon="gg:add" width="23" height="23" style="color: darkblue" />
          بارگذاری عکس
        </div>
      </div>
      <div class="w-full flex items-center justify-center mb-12">
        <button
          @click="submitNewProduct(newProduct)"
          class="w-full bg-blue-500 text-white py-3 rounded-lg transition-colors duration-300 hover:bg-blue-600"
        >
          ثبت محصول
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import ToggleButton from "@/components/ToggleButton.vue";
import { ref } from "vue";
import { useCounterStore } from "@/stores/shoppers";
import { useToast } from "vue-toastification";

const toast = useToast();
const store = useCounterStore();
const newProduct = ref({
  id: null,
  title: "",
  price: null,
  productCode: "",
  category: null,
  productInfo: "",
  showVitrin: true,
  img: "",
});

const changeState = () => {
  newProduct.value.showVitrin = !newProduct.value.showVitrin;
};

const setProductCategory = (e) => {
  newProduct.value.category = e.target.value;
};

const randomCodeGenerator = () => {
  let num = Math.floor(Math.random() * 100000);
  if (num.length <= 4) {
    num = Math.floor(Math.random() * 100000);
    return num;
  } else {
    return num;
  }
};

const submitNewProduct = (product) => {
  newProduct.value.id = randomCodeGenerator();
  store.addProduct(product);
  toast.success("محصول با موفقیت اضافه شد");
};
</script>

<style scoped></style>
