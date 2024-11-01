import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import defaultLayout from "@/components/defaultLayout.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import FAQView from "@/views/FAQView.vue";
import loginView from "@/views/loginView.vue";
import notFoundView from "@/views/notFoundView.vue";
import ShopAdminLayout from "@/components/shopAdminLayout.vue";
import shopAdminMain from "@/views/shopAdminMain.vue";
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
          component: shopAdminMain,
        },
      ],
    },
  ],
});

export default router;
