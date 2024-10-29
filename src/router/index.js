import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import defaultLayout from "@/components/defaultLayout.vue";
import ContactUsView from "@/views/ContactUsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      ],
    },
  ],
});

export default router;
