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
        isShownVitrin: false,
      },
      {
        id: 2,
        title: "چایی کیسه ای",
        price: 60000,
        img: "product2.png",
        isShownVitrin: false,
      },
      {
        id: 3,
        title: "سیب زمینی",
        price: 90000,
        img: "product3.png",
        isShownVitrin: true,
      },
      {
        id: 4,
        title: "ماست برنجی",
        price: 10000,
        isShownVitrin: false,
      },
    ],
    createdCarts: [
      {
        id: 1,
        cartLink: "/user/1",
        reciverName: "محمد منوچهری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - افسریه  -   ۱۵ متری اول",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 0,
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
        cartLink: "/user/2",
        reciverName: "محمد هنری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - خیابان دماوند -  میدان وثوق",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 0,
        date: dateCreator(),
        reciverProducts: [
          {
            id: 3,
            title: "سیب زمینی",
            price: 90000,
            img: "product3.png",
          },
        ],
        status: "waiting",
      },
      {
        id: 3,
        cartLink: "/user/3",
        reciverName: "محمد هنری",
        reciverNumber: "۰۹۱۰۲۲۳۲۳۷۸",
        reciverAddress: "تهران - خیابان دماوند -  میدان وثوق",
        reciverPostalCode: "12345678912",
        reciverNotes: "",
        sumProducts: 0,
        date: dateCreator(),
        reciverProducts: [
          {
            id: 3,
            title: "سیب زمینی",
            price: 90000,
            img: "product3.png",
          },
        ],
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

  function createCartFromAdminPanel(selectedProducts) {
    shopOwnerInformation.value.createdCarts.push({
      id: shopOwnerInformation.value.createdCarts.length + 1,
      reciverName:
        "کاربر بی نام" + (shopOwnerInformation.value.createdCarts.length + 1),
      reciverAddress: "",
      reciverNotes: "",
      reciverPostalCode: "",
      reciverProducts: selectedProducts,
      sumProducts: 0,
      date: dateCreator(),
      status: "waiting",
    });
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }
  function sumOfProducts(index) {
    shopOwnerInformation.value.createdCarts[index - 1].sumProducts = 0;

    shopOwnerInformation.value.createdCarts[index - 1].reciverProducts.forEach(
      (item) => {
        shopOwnerInformation.value.createdCarts[index - 1].sumProducts =
          item.price +
          shopOwnerInformation.value.createdCarts[index - 1].sumProducts;
      }
    );
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }

  function changeCartStatus(status, index) {
    shopOwnerInformation.value.createdCarts[index - 1].status = status;
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }

  function showProductInVitrin(state, index) {
    shopOwnerInformation.value.products[index].isShownVitrin = state;
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }

  function showAllProductsInVitrin(state) {
    shopOwnerInformation.value.products.forEach((item) => {
      item.isShownVitrin = state;
    });
    localStorage.setItem(
      "userInfo",
      JSON.stringify(shopOwnerInformation.value)
    );
  }
  function showProductInVitrinById(id, state) {
    let item = shopOwnerInformation.value.products.find(
      (item) => item.id === id
    );
    item.isShownVitrin = state;

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
    createCartFromAdminPanel,
    sumOfProducts,
    changeCartStatus,
    showProductInVitrin,
    showAllProductsInVitrin,
    showProductInVitrinById,
  };
});
