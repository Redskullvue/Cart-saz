import { ref } from "vue";
import { defineStore } from "pinia";
import { dateCreator } from "@/composables/dateCreator";

export const useCounterStore = defineStore("shoppers", () => {
  // STATES

  const shopOwnerInformation = ref({
    name: "",
    shopId: "",
    shopName: "",
    shopCategory: "",
    eMail: "",
    postalCode: "",
    products: [],
    createdCarts: [
      {
        reciverName: "محمد منوچهری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - افسریه  -   ۱۵ متری اول",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 40000,
        date: dateCreator(),
        reciverProducts: ["1", "2", "3", "4", "5"],
        status: "ready",
      },
      {
        reciverName: "محمد هنری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - خیابان دماوند -  میدان وثوق",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 510000,
        date: dateCreator(),
        reciverProducts: ["1", "2", "3"],
        status: "waiting",
      },
      {
        reciverName: "محمد هنری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - خیابان دماوند -  میدان وثوق",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 70000,
        date: dateCreator(),
        reciverProducts: ["1", "2", "3"],
        status: "canceled",
      },
    ],
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
