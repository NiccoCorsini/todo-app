import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import All from "../views/All.vue";
import Solved from "../views/Solved.vue";
import Unsolved from "../views/Unsolved.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "All",
    component: All,
  },
  {
    path: "/solved",
    name: "Solved",
    component: Solved,
  },
  {
    path: "/unsolved",
    name: "Unsolved",
    component: Unsolved,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
