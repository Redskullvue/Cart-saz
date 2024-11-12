import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("shoppers", () => {
  // STATES

  const shopOwnerInformation = ref({
    name: "",
    shopId: "",
    shopName: "",
    shopCategory: "",
    eMail: "",
    postalCode: "",
  });

  const shopCategories = ref(["لباس", "مواد غذایی", "اکسسوری"]);

  // Actions

  function setUserCategory(e) {
    shopOwnerInformation.value.shopCategory = e.target.value;
  }
  return {
    shopOwnerInformation,
    shopCategories,
    setUserCategory,
  };
});
