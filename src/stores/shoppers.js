import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { dateCreator } from "@/composables/dateCreator";

export const useCounterStore = defineStore("shoppers", () => {
  // STATES

  const shopOwnerInformation = ref({
    name: "",
    shopId: "",
    shopName: "",
    shopCategory: "",
    shopPhone: "۰۹۱۰۲۲۳۲۳۷۸",
    eMail: "",
    postalCode: "",
    shopWhatsAppVitrin: "",
    shopAddressVitrin: "",
    shopPhoneVitrin: "",
    shopDescription: "",
    shopIdVitrin: "",
    showVitrinContact: false,
    vitrinLogo: "logo2.png",
    products: [
      {
        id: 1,
        title: "روغن زیتون",
        price: 30000,
        img: "product1.png",
      },
      {
        id: 2,
        title: "چایی کیسه ای",
        price: 60000,
        img: "product2.png",
      },
      {
        id: 3,
        title: "سیب زمینی",
        price: 90000,
        img: "product3.png",
      },
      {
        id: 4,
        title: "ماست برنجی",
        price: 10000,
      },
    ],
    createdCarts: [
      {
        id: 1,
        reciverName: "محمد منوچهری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - افسریه  -   ۱۵ متری اول",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 40000,
        date: dateCreator(),
        reciverProducts: [
          {
            id: 3,
            title: "سیب زمینی",
            price: 90000,
            img: "product3.png",
          },
          {
            id: 2,
            title: "چایی کیسه ای",
            price: 60000,
            img: "product2.png",
          },
        ],
        status: "ready",
      },
      {
        id: 2,
        reciverName: "محمد هنری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - خیابان دماوند -  میدان وثوق",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 510000,
        date: dateCreator(),
        reciverProducts: [],
        status: "waiting",
      },
      {
        id: 3,
        reciverName: "محمد هنری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - خیابان دماوند -  میدان وثوق",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 70000,
        date: dateCreator(),
        reciverProducts: [],
        status: "canceled",
      },
    ],
  });

  const shopCategories = ref(["لباس", "مواد غذایی", "اکسسوری"]);

  const isUserAuthed = ref(false);

  // Actions

  watch(
    shopOwnerInformation.value,
    () => {
      localStorage.setItem(
        "userInfo",
        JSON.stringify(shopOwnerInformation.value)
      );
    },
    { deep: true }
  );

  function setUserCategory(e) {
    shopOwnerInformation.value.shopCategory = e.target.value;
  }
  function authUser() {
    isUserAuthed.value = true;
    localStorage.setItem("isAuthed", isUserAuthed.value);
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }

  function deleteProduct(index) {
    shopOwnerInformation.value.products.splice(index, 1);
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }
  function addProduct(product) {
    shopOwnerInformation.value.products.unshift(product);
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }
  function showVitrin() {
    shopOwnerInformation.value.showVitrinContact =
      !shopOwnerInformation.value.showVitrinContact;
  }

  function submitVitrinContactInfo() {
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }

  function setUserLogo(image) {
    shopOwnerInformation.value.vitrinLogo = image;
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }
  return {
    shopOwnerInformation,
    shopCategories,
    isUserAuthed,
    setUserCategory,
    authUser,
    deleteProduct,
    addProduct,
    showVitrin,
    submitVitrinContactInfo,
    setUserLogo,
  };
});
