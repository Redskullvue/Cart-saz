import { ref } from "vue";
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

  const isUserAuthed = ref(false);

  // Actions

  function setUserCategory(e) {
    shopOwnerInformation.value.shopCategory = e.target.value;
  }
  function authUser() {
    isUserAuthed.value = true;
    localStorage.setItem("isAuthed", isUserAuthed.value);
  }
  return {
    shopOwnerInformation,
    shopCategories,
    isUserAuthed,
    setUserCategory,
    authUser,
  };
});
