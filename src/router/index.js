import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/HomeVue.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination",
    component: () => import("../views/TheDestination.vue"),

    // props (boolean || static || function that return the desired value)
    props: true,
    // props: (route) => ({id: parseInt(route.params.id)}),
    children: [
      {
        path: ":exp",
        name: "exp.show",
        component: () => import("../views/TheExp.vue"),
        props: (route) => ({...route.params, id: parseInt(route.params.id)}),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({left: 0, top: 0});
        }, 300);
      });
    }
  },
});

export default router;
