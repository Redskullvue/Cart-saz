import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("shoppers", () => {
  const shopOwnerInformation = ref({
    name: "",
    shopId: "",
    shopName: "",
    shopCategory: "",
    eMail: "",
    postalCode: "",
  });

  return { shopOwnerInformation };
});
