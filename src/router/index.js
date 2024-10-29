import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import defaultLayout from "@/components/defaultLayout.vue";

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
      ],
    },
  ],
});

export default router;
