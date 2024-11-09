import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import defaultLayout from "@/components/defaultLayout.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import FAQView from "@/views/FAQView.vue";
import loginView from "@/views/loginView.vue";
import notFoundView from "@/views/notFoundView.vue";
import ShopAdminLayout from "@/components/shopAdminLayout.vue";
import shopAdminMain from "@/views/shopAdminMain.vue";
import ShopAdminProducts from "@/views/shopAdminProducts.vue";
import shopAdminProfile from "@/views/shopAdminProfile.vue";
import shopAdminCarts from "@/views/shopAdminCarts.vue";
import CreateProductView from "@/views/CreateProductView.vue";
import SingleCartView from "@/views/SingleCartView.vue";
import CreateNewCartView from "@/views/createNewCartView.vue";
import VitrinView from "@/views/VitrinView.vue";
import VitrinProductsView from "@/views/VitrinProductsView.vue";
import VitrinContactView from "@/views/VitrinContactView.vue";
import VitrinSettingView from "@/views/VitrinSettingView.vue";
import VitrinQrCodeView from "@/views/VitrinQrCodeView.vue";
import VitrinLayout from "@/components/vitrinLayout.vue";
import UserVitrinView from "@/views/UserVitrinView.vue";
import UserVitrinContact from "@/views/userVitrinContact.vue";
import SingleProductView from "@/views/SingleProductView.vue";
import UserCartView from "@/views/userCartView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: notFoundView,
    },
    {
      path: "/",
      component: defaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/تماس-با-ما",
          name: "contactUs",
          component: ContactUsView,
        },
        {
          path: "/faq",
          name: "FAQView",
          component: FAQView,
        },
      ],
    },
    {
      path: "/login",
      name: "loginView",
      component: loginView,
    },
    {
      path: "/dashboard/main",
      component: ShopAdminLayout,
      children: [
        {
          path: "/dashboard/main",
          name: "adminMain",
          component: shopAdminMain,
          meta: {
            title: "خانه",
          },
        },
        {
          path: "/dashboard/products",
          name: "adminProducts",
          component: ShopAdminProducts,
          meta: {
            title: "محصولات",
          },
        },
        {
          path: "/dashboard/carts",
          name: "adminCarts",
          component: shopAdminCarts,
          meta: {
            title: "سبدهای خرید",
          },
        },
        {
          path: "/dashboard/profile",
          name: "adminProfile",
          component: shopAdminProfile,
          meta: {
            title: "حساب کاربری",
          },
        },
        {
          path: "/dashboard/createproduct",
          name: "createProductView",
          component: CreateProductView,
          meta: {
            title: "افزودن محصول جدید",
          },
        },
        {
          path: "/dashboard/cart/:cartid",
          name: "singleCartView",
          component: SingleCartView,
          meta: {
            title: "سبد خرید",
          },
        },
        {
          path: "/dashboard/cart/add",
          name: "createNewCartView",
          component: CreateNewCartView,
          meta: {
            title: "ساخت سبد خرید",
          },
        },
        {
          path: "/dashboard/vitrin",
          name: "VitrinView",
          component: VitrinView,
          meta: {
            title: "ویترین شما",
          },
        },
        {
          path: "/dashboard/vitrin/products",
          name: "VitrinProductsView",
          component: VitrinProductsView,
          meta: {
            title: "محصولات ویترین",
          },
        },
        {
          path: "/dashboard/vitrin/contact",
          name: "VitrinContactView",
          component: VitrinContactView,
          meta: {
            title: "اطلاعات تماس",
          },
        },
        {
          path: "/dashboard/vitrin/setting",
          name: "VitrinSettingView",
          component: VitrinSettingView,
          meta: {
            title: "تنظیمات کلی ویترین",
          },
        },
        {
          path: "/dashboard/vitrin/qrcode",
          name: "VitrinQrCodeView",
          component: VitrinQrCodeView,
          meta: {
            title: "Qr Code",
          },
        },
      ],
    },
    {
      path: "/vitrin",
      name: "vitrinLayout",
      component: VitrinLayout,
      children: [
        {
          path: "/vitrin",
          name: "userVitrinView",
          component: UserVitrinView,
        },
        {
          path: "/vitrin/contacts",
          name: "userVitrinContact",
          component: UserVitrinContact,
        },
      ],
    },
    {
      path: "/products/:id",
      name: "SingleProductView",
      component: SingleProductView,
    },
    {
      path: "/user/:cartid",
      name: "userCartView",
      component: UserCartView,
    },
  ],
});

router.beforeEach((to) => {
  const { title } = to.meta;
  const defaultTitle = "کارت ساز";
  document.title = title || defaultTitle;
});

export default router;
